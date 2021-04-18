import { Component, VERSION } from "@angular/core";

@Component({
  selector: "kwm-root",
  // hier wird die Komponente vaccination-list aufgerufen
  template: '<kwm-vaccination-list></kwm-vaccination-list>',
  styleUrls: []
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
