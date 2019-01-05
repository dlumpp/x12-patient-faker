import './index.html';
import './index.css';
import { FakeFactory } from './fake-factory';
import { X12Segment } from './x12-segment';
import * as ES6PromisePolyfill from 'es6-promise';

ES6PromisePolyfill.polyfill();

async function renderFakePatient(): Promise<string> {
    const faker = await import(/* webpackChunkName: "faker" */ 'faker/locale/en_US');
    const fakeFac = new FakeFactory(faker);

    const pt = fakeFac.createPatient();
    
    const ptNameSegment = new X12Segment("NM1", "IL", "1",
        pt.Name.LastName, pt.Name.FirstName, pt.Name.MiddleInitial, "", "",
        "MI", pt.Name.MemberId);
    
    const streetAddressSegment = new X12Segment("N3", pt.Address.Street);
    const cityAddressSegment = new X12Segment("N4", 
        pt.Address.City, pt.Address.State, pt.Address.Zip);
    
    const demographicSegment = new X12Segment("DMG", "D8",
        pt.Demographic.DateOfBirth, pt.Demographic.Gender);
    
    const serviceDateSegment = new X12Segment("DTP", "472", "D8",
        fakeFac.createRecentD8());
    
    const output: string =  [
            ptNameSegment,
            streetAddressSegment,
            cityAddressSegment,
            demographicSegment,
            serviceDateSegment
        ].join("<br>");

        return output;
}

renderFakePatient().then(ptHtml => {
    const contentDiv = document.getElementById("content");
    if(contentDiv){
        contentDiv.innerHTML = ptHtml;
    }
})