import './index.html';
import * as faker from 'faker';
import { FakeFactory } from './fake-factory';
import { X12Segment } from './x12-segment';

const fakeFac = new FakeFactory(faker);

const ptName = fakeFac.createPatientName();
const ptNameSegment = new X12Segment("NM1",
    ptName.LastName, ptName.FirstName, ptName.MiddleInitial, 
    "MI", ptName.MemberId).toString();

const output: string = ptNameSegment;

const contentDiv = document.getElementById("content");
if(contentDiv){
    contentDiv.innerHTML = output;
}