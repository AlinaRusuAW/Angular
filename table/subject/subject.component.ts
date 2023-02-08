import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  disciplina = [{
    "id": "1",
    "denumirea": "Matematica",
    "profesor": "Vlas",
    "grupa": "IP11Z"
  }, {
    "id": "2",
    "denumirea": "Informatica",
    "profesor": "Mocanu",
    "grupa": "MI21Z"
  }, {
    "id": "3",
    "denumirea": "Bazele programarii",
    "profesor": "Grosu",
    "grupa": "IS11R"
  }];

}
