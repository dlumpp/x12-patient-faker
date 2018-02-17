import { Patient } from "./patient-models/patient";
import { PatientName } from "./patient-models/patient-name";
import { Address } from "./patient-models/address";
import { Demographic } from "./patient-models/demographic";

export class FakeFactory {
    constructor(private faker: Faker.FakerStatic) { }

    createPatient(): Patient {
        const randomGender = <Gender>this.faker.random.number(1);
        return new Patient(
            this.createPatientName(randomGender),
            this.createAddress(),
            this.createDemographic(randomGender)
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

    createDemographic(gender: Gender): Demographic {
        return new Demographic (
            this.formatD8(this.faker.date.past(90)),
            Gender[gender].toString().substring(0, 1)
        );
    }

    private formatD8(date: Date): string {
        return date.toISOString().substring(0, 10).replace(/-/g, "");
    }
}

enum Gender {
    Male = 0,
    Female = 1
}