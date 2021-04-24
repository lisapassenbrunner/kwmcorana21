import { Vaccination } from "./vaccination";

export class Place{
  constructor(
    public id: number, 
    public title: string, 
    public plz: number, 
    public place: string, 
    public street: string, 
    public number: number, 
    public state: string, 
    public district: string,
    public vaccinations: Vaccination[]){}
}