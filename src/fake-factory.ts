import { PatientName } from "./patient-name";

export class FakeFactory {
    constructor(private faker: Faker.FakerStatic){}
    
    createPatientName(): PatientName {
        return new PatientName(
this.faker.name.firstName(),
this.faker.name.lastName(),
this.faker.name.firstName().substring(0,1),
this.faker.finance.bic()
        );
    }
}