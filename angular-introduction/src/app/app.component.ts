import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';

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

  person = {
    givenName: "Giannis",
    surName: "Kaparos",
    age: 0x37,
    email: "gkaparos@aueb.gr",
  };
}
