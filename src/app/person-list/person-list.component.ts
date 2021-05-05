import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PeopleService } from "../shared/people.service";
import { Person } from "../shared/person";
import { PersonFactory } from "../shared/person-factory";

@Component({
  selector: "a.kwm-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"]
})
export class PersonListComponent implements OnInit {
  people: Person[];
  person = PersonFactory.empty();

  constructor(
    private kwm: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.kwm.getAll().subscribe(res => (this.people = res));
    const params = this.route.snapshot.params;
    // this.kwm.getSingle(params["code"]).subscribe(b => (this.vaccination = b));
  }
/*
  checkVaccination(id) {
    for (let person of this.people) {
      if (person.id == id) {
        if (person.vaccinated == false) {
          person.vaccinated = true;
        } else person.vaccinated = false;
        console.log(person);
        this.kwm.update(person).subscribe();
      }
    }
  }*/
}
