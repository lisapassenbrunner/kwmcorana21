import { Person } from "./person";
import { Vaccination } from "./vaccination";

export class PersonFactory {
  static empty(): Person {
    return new Person(
      0,
      "",
      "",
      "",
      "",
      new Date(),
      "",
      "",
      false,
      false
    );
  }

  static fromObject(rawPerson: any): Person {
    return new Person(
      rawPerson.id,
      rawPerson.sv_nr,
      rawPerson.firstName,
      rawPerson.lastName,
      rawPerson.gender,
      typeof rawPerson.dateOfBirth === "string"
        ? new Date(rawPerson.dateOfBirth)
        : rawPerson.dateOfBirth,
      rawPerson.email,
      rawPerson.phoneNumber,
      rawPerson.administrator,
      rawPerson.vaccinated
    );
  }
}
