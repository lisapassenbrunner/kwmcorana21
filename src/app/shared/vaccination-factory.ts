import { Vaccination } from "./vaccination";

export class VaccinationFactory {
  static empty() : Vaccination{
    return new Vaccination(0, new Date(), '', 0, 0, '', '', 0, []);
  }

  static fromObject(rawVaccination: any): Vaccination{
    return new Vaccination(
      rawVaccination.id,
      rawVaccination.date,
      rawVaccination.time,
      rawVaccination.max_registrations,
      rawVaccination.registrations,
      rawVaccination.vaccine,
      rawVaccination.description,
      rawVaccination.place_id,
      rawVaccination.people,
      
      
    );
  }
}