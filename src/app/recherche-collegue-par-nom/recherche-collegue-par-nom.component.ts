import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})



export class RechercheCollegueParNomComponent implements OnInit {

  matTab: string[]
  matNotFound = false
  errorTech = false

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  lancerRecherche(valueRecherche): void {

    this.matTab = []

    this.service.rechercherParNom(valueRecherche)
      .subscribe(matriculesBack => {
        this.errorTech = false
        if (matriculesBack.length > 0) {
          this.matTab = matriculesBack
          this.matNotFound = false
        } else {
          this.matNotFound = true
        }
      },
        error => this.errorTech = true)
  }

  afficherInfos(mat: string): void {
    this.service.collegueParMat(mat)
      .subscribe(() => {}, 
      error => this.errorTech = true)
  }
  

}

