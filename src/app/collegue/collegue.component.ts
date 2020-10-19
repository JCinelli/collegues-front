import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col: Collegue;

  modifier: boolean = true;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.recupererCollegueCourant()
      .subscribe(colSelect => this.col = colSelect)
  }

  modifierConsole() {
    this.modifier = !this.modifier
  }

  creerCollegueConsole() {
    console.log('Création d’un nouveau collègue')
  }

}
