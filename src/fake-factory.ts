import { Patient } from "./patient-models/patient";
import { PatientName } from "./patient-models/patient-name";
import { Address } from "./patient-models/address";

export class FakeFactory {
    constructor(private faker: Faker.FakerStatic) { }

    createPatient(): Patient {
        const randomGender = <Gender>this.faker.random.number(1);
        const ptName = this.createPatientName(randomGender);
        return new Patient(
            ptName,
            this.createAddress()
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

    createAddress(): Address {
        return new Address(
            this.faker.address.streetAddress(),
            this.faker.address.city(),
            this.faker.address.stateAbbr(),
            this.faker.address.zipCode()
        );
    }
}

enum Gender {
    Male = 0,
    Female = 1
}