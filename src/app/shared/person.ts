export class Person{
  constructor(
    public id: number, 
    public sv_nr: number, 
    public firstName: string, 
    public lastName: string, 
    public gender: string, 
    public dateOfBirth: Date, 
    public email: string, 
    public phoneNumber: string, 
    public administrator: boolean,
    public vaccinated?: boolean 
    ){}
}