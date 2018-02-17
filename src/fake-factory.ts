import { Patient } from "./patient-models/patient";
import { PatientName } from "./patient-models/patient-name";

export class FakeFactory {
    constructor(private faker: Faker.FakerStatic) { }

    createPatient(): Patient {
        const randomGender = <Gender>this.faker.random.number(1);
        const ptName = this.createPatientName(randomGender);
        return new Patient(
            ptName
        );
    }

    createPatientName(gender: Gender): PatientName {
        return new PatientName(
            this.faker.name.firstName(gender),
            this.faker.name.lastName(),
            this.faker.name.firstName().substring(0, 1),
            this.faker.finance.bic()
        );
    }
}

enum Gender {
    Male = 0,
    Female = 1
}