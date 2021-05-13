import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwm-home',
  template: `
<div class="ui container">
<h1>Anmeldung zur Impfung Österreich</h1>
<p>Melden Sie sich hier für die Corana Impfung in Österreich an</p>
<a routerLink="../vaccinations" class="ui red button">
Impfungen ansehen
</a>
</div>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}