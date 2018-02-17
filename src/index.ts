import './index.html';
import * as faker from 'faker/locale/en_US';
import { FakeFactory } from './fake-factory';
import { X12Segment } from './x12-segment';

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


const output: string =  [
        ptNameSegment,
        streetAddressSegment,
        cityAddressSegment,
        demographicSegment
    ].join("<br>");

const contentDiv = document.getElementById("content");
if(contentDiv){
    contentDiv.innerHTML = output;
}