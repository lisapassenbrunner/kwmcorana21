import { Person } from "./person";
import { Place } from "./place";
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
      "",
      [
        {
          id: 0,
          code: "",
          date: new Date(),
          time: "",
          max_registrations: 0,
          registrations: 0,
          place: [
        {
          id: 0,
          title: "",
          plz: 0,
          place: "",
          street: "",
          number: 0,
          state: "",
          district: ""
        }
      ],
          vaccine: "",
          description: ""
        }
      ],
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
      rawPerson.vaccination_id,
      rawPerson.vaccination,
      rawPerson.vaccinated
    );
  }
}
