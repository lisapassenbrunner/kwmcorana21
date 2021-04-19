import { Component, VERSION } from "@angular/core";
import { Vaccination } from "./shared/vaccination";

@Component({
  selector: "kwm-root",
  // hier wird die Komponente vaccination-list aufgerufen
  //welche Ansicht soll gerade aktiv sein
  template: `<kwm-vaccination-list *ngIf="listOn"></kwm-vaccination-list>
  <kwm-vaccination-details *ngIf="detailsOn" [vaccination]="vaccination"></kwm-vaccination-details>`
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  vaccination: Vaccination;
}
