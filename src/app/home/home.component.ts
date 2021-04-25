import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<div class="ui container">
<h1>Anmeldung zur Impfung Österreich</h1>
<p>Impfungen Österreich</p>
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