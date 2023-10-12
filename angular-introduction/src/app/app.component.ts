import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
    givenName: "Giannakis",
    surName: "galis",
    age: 0x16,
    email: "gg@aueb.gr",
    address: "Athens"
  };
}
