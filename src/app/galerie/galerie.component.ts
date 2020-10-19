import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollegueGalerie } from './collegueGalerie';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  allCollegues: CollegueGalerie[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.recupererAll().subscribe(colG => this.allCollegues = colG);
  }

}
