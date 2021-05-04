import { Vaccination } from "./vaccination";

export class VaccinationFactory {
  static empty(): Vaccination {
    return new Vaccination(
      0,
      "",
      new Date(),
      "",
      0,
      0,
      [
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
      "",
      ""
    );
  }

  static fromObject(rawVaccination: any): Vaccination {
    return new Vaccination(
      rawVaccination.id,
      rawVaccination.code,
      typeof rawVaccination.date === "string"
        ? new Date(rawVaccination.date)
        : rawVaccination.date,
      rawVaccination.time,
      rawVaccination.max_registrations,
      rawVaccination.registrations,
      rawVaccination.places,
      rawVaccination.vaccine,
      rawVaccination.description
    );
  }
}
