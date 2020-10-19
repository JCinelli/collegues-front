import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { CollegueForm } from './collegueForm';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  creerCol: CollegueForm = {}
  erreurTechnique = false
  toutOk = false

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  creer(): void {
    this.service.creerCollegue(this.creerCol).subscribe(
        col => {
          this.creerCol = {}
          this.toutOk = true
        }, 
        error => {
          this.erreurTechnique = true
          this.toutOk = false
        }
      );
  }


}
