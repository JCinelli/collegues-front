import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col;

  constructor() { }

  ngOnInit(): void {
  }

  modifierConsole() {
    console.log('Modification du collègue')
  }

  creerCollegueConsole() {
    console.log('Création d’un nouveau collègue')
  }

}
