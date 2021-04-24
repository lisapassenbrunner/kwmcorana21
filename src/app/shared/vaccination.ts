import { Person } from "./person";
import { Place } from "./place";

export class Vaccination {
  constructor(
    public id: number,
    public date: Date,
    public time: string,
    public max_registrations: number,
    public registrations: number,
   // public places: Place[],
    public people: Person[],
    public vaccine?: string,
    public description?: string
  ) {}
}
