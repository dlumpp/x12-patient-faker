import { faker } from '@faker-js/faker';
import { Patient } from "./patient-models/patient";
import { PatientName } from "./patient-models/patient-name";
import { Address } from "./patient-models/address";
import { Demographic } from "./patient-models/demographic";

export class FakeFactory {
    constructor() { }

    createPatient(): Patient {
        const randomGender = faker.number.int({ min: 0, max: 1 }) as Gender;
        return new Patient(
            this.createPatientName(randomGender),
            this.createAddress(),
            this.createDemographic(randomGender)
        );
    }

    createPatientName(gender: Gender): PatientName {
        const genderStr = gender === Gender.Male ? 'male' : 'female';
        return new PatientName(
            faker.person.firstName(genderStr),
            faker.person.lastName(),
            faker.person.firstName().substring(0, 1),
            faker.finance.bic()
        );
    }

    createAddress(): Address {
        return new Address(
            faker.location.streetAddress(),
            faker.location.city(),
            faker.location.stateAbbr(),
            faker.location.zipCode()
        );
    }

    createDemographic(gender: Gender): Demographic {
        return new Demographic (
            this.formatD8(faker.date.past({ years: 90 })),
            Gender[gender].toString().substring(0, 1)
        );
    }

    createRecentD8(): string {
        return this.formatD8(faker.date.past());
    }

    private formatD8(date: Date): string {
        return date.toISOString().substring(0, 10).replace(/-/g, "");
    }
}

enum Gender {
    Male = 0,
    Female = 1
}