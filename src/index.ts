import './index.html';
import * as faker from 'faker';

const output: string = faker.name.findName();

const contentDiv = document.getElementById("content");
if(contentDiv){
    contentDiv.innerHTML = output;
}