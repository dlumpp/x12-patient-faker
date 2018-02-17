import './index.html';
import * as faker from 'faker';
import { FakeFactory } from './fake-factory';
import { X12Segment } from './x12-segment';

const fakeFac = new FakeFactory(faker);

const pt = fakeFac.createPatient();
const ptNameSegment = new X12Segment("NM1", "IL", "1",
    pt.Name.LastName, pt.Name.FirstName, pt.Name.MiddleInitial, "", "",
    "MI", pt.Name.MemberId).toString();

const output: string = ptNameSegment;

const contentDiv = document.getElementById("content");
if(contentDiv){
    contentDiv.innerHTML = output;
}