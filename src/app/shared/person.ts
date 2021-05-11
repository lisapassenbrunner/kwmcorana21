import { Vaccination } from "./vaccination";

export class Person {
  constructor(
    public id: number,
    public sv_nr: string,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public dateOfBirth: Date,
    public email: string,
    public phoneNumber: string,
    public administrator: boolean,
    public vaccination_id?: number,
   public vaccination?: Vaccination[],
    public vaccinated?: boolean
  ) {}
}
