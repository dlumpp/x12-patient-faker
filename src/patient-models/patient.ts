import { PatientName } from "./patient-name";
import { Address } from "./address";

export class Patient {

    constructor(
        public readonly Name: PatientName,
        public readonly Address: Address
    ){}
}