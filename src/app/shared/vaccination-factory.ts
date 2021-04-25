import { Vaccination } from "./vaccination";

export class VaccinationFactory {
  static empty() : Vaccination{
    console.log("Hi");
    return new Vaccination(0, new Date(), '', 0, 0, [], [], '', '');
  }

  static fromObject(rawVaccination: any): Vaccination{
    return new Vaccination(
      rawVaccination.id,
      typeof(rawVaccination.date) === 'string' ?
      new Date(rawVaccination.date) : rawVaccination.date,
      rawVaccination.time,
      rawVaccination.max_registrations,
      rawVaccination.registrations,
      rawVaccination.places,
      rawVaccination.people,
      rawVaccination.vaccine,
      rawVaccination.description
    );
  }
}