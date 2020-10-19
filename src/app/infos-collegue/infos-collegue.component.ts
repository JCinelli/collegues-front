import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models/Collegue';
import { CollegueBack } from '../services/collegueBack';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-infos-collegue',
  templateUrl: './infos-collegue.component.html',
  styleUrls: ['./infos-collegue.component.css']
})
export class InfosCollegueComponent implements OnInit {

  matriculeColCourant: string

  colCourant: Collegue

  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.matriculeColCourant = params.get('matricule')
    })

    this.recupCol();
  }

  recupCol(): void {
    this.service.collegueParMat(this.matriculeColCourant).subscribe(col => this.colCourant = col)
  }

}
