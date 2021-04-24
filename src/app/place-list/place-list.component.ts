import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Place } from '../shared/place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places: Place[];

  @Output()showPlaceDetailsEvent = new EventEmitter<Place>()
  

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
            "Oberoesterreich"
          ),
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
    ];
  }

  // Detail View
  showDetails(place: Place) {
    this.showPlaceDetailsEvent.emit(place);
  }

}