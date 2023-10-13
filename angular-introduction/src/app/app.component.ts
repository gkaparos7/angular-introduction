import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = "Giannis";
  lastname = "Kaparos";

    person: Person = {
    givenName: "Giannis",
    surName: "Kaparos",
    age: 0x26,
    email: "gkaparos@aueb.gr",
    address: "Antissis 6-8"
  };

  person2: Person = {
    givenName: "Giannis",
    surName: "Agiannis",
    age: 0x14,
    email: "gkaparos7@aueb.gr",
    address: "Athens"
  };

  
}
