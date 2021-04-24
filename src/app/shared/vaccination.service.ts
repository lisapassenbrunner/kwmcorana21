import { Injectable } from '@angular/core';
import { Person } from './person';
import { Place } from './place';
import { Vaccination } from './vaccination';

@Injectable()
export class VaccinationService {
  vaccinations: Vaccination[];

  constructor() { 
    this.vaccinations = [
      new Vaccination(
        1,
        new Date(2021, 4, 18),
        "08:00-17:00",
        40,
        4,
        [
          new Place(
            1,
            "Impfstation Sporthalle Niederneukirchen",
            4491,
            "Niederneukirchen",
            "Ruprechtshofen",
            33,
            "Oesterreich",
            "Oberoesterreich"
          )
        ],
        [
          new Person(
            1,
            312207010000,
            "Lisa",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06504394829",
            false,
            false
          ),
          new Person(
            2,
            362207010000,
            "Andrea",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06704394829",
            false,
            false
          ),
          new Person(
            3,
            31220560000,
            "Theresa",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06804394829",
            false,
            false
          ),
          new Person(
            4,
            312207560000,
            "Else",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06505674829",
            false,
            false
          )
        ],
        "Pfizer",
        "Corona Impfung für über 65 Jährige"
      ),
      new Vaccination(
        2,
        new Date(2021, 5, 28),
        "08:00-17:00",
        40,
        3,
        [
          new Place(
            2,
            "Impfstation FH Hagenberg",
            4032,
            "Hagenberg",
            "Softwarpark",
            23,
            "Oesterreich",
            "Oberoesterreich"
          )
        ],
        [
          new Person(
            4,
            312207090000,
            "Lisa",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06504394829",
            false,
            false
          ),
          new Person(
            5,
            362807010000,
            "Andrea",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06704394829",
            false,
            false
          ),
          new Person(
            6,
            31220589000,
            "Theresa",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email@email.com",
            "06804394829",
            false,
            false
          )
        ],
        "Biontech",
        "Corona Impfung für über 65 Jährige"
      )
    ];
  }


  getAll(){
    return this.vaccinations
  }

  getSingle(description : string) : Vaccination{
    return this.vaccinations.find(vaccination => vaccination.description === description);
  }

}