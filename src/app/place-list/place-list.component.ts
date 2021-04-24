import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Person } from "../shared/person";
import { Place } from "../shared/place";
import { Vaccination } from "../shared/vaccination";

@Component({
  selector: "kwm-place-list",
  templateUrl: "./place-list.component.html",
  styleUrls: ["./place-list.component.css"]
})
export class PlaceListComponent implements OnInit {
  places: Place[];

  @Output() showPlaceDetailsEvent = new EventEmitter<Place>();

  ngOnInit() {
    this.places = [
      new Place(
        1,
        "Impfstation Sporthalle Niederneukirchen",
        4491,
        "Niederneukirchen",
        "Ruprechtshofen",
        33,
        "Oesterreich",
        "Oberoesterreich",
        [
          new Vaccination(
        1,
        new Date(2021, 4, 18),
        "08:00-17:00",
        40,
        4,
        [
          new Person(
            1,
            312207010000,
            "Lisa",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email7@email.com",
            "secret",
            "06504394829",
            false,
            false
          )
        ],
        "Pfizer",
        "Corona Impfung für über 65 Jährige")
        ]
      ),
      new Place(
        1,
        "Impfstation Sporthalle Niederneukirchen",
        4491,
        "Niederneukirchen",
        "Ruprechtshofen",
        33,
        "Oesterreich",
        "Oberoesterreich",
        [
          new Vaccination(
        1,
        new Date(2021, 4, 18),
        "08:00-17:00",
        40,
        4,
        [
          new Person(
            1,
            312207010000,
            "Lisa",
            "Passenbrunner",
            "weiblich",
            new Date(2021, 4, 18),
            "email7@email.com",
            "secret",
            "06504394829",
            false,
            false
          )
        ],
        "Pfizer",
        "Corona Impfung für über 65 Jährige")
        ],
      )
    ];
  }

  // Detail View
  showPlaceDetails(place: Place) {
    this.showPlaceDetailsEvent.emit(place);
  }
}
