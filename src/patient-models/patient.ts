import { PatientName } from "./patient-name";
import { Address } from "./address";
import { Demographic } from "./demographic";

export class Patient {

    constructor(
        public readonly Name: PatientName,
        public readonly Address: Address,
        public readonly Demographic: Demographic
    ){}
}