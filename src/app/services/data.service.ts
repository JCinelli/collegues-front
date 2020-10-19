import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { collegueMock } from '../mock/collegues.mock';
import { collegueMockTab } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map, tap } from 'rxjs/operators';
import { CollegueForm } from '../creer-collegue/collegueForm';
import { CollegueGalerie } from '../galerie/collegueGalerie';
import { CollegueBack } from './collegueBack';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueSelect = new Subject<Collegue>()

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${URL_BACKEND}/collegues?nom=${nom}`) 
  }

  recupererCollegueCourant(): Observable<Collegue> {
    return this.subCollegueSelect.asObservable();
  }

  collegueParMat(mat: string): Observable<Collegue>{
    return this.http.get<CollegueBack>(`${URL_BACKEND}/collegues/${mat}`)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenoms, colBack.email, 
                                    new Date(colBack.dateDeNaissance), colBack.photoUrl)), 
        tap(collegue => this.subCollegueSelect.next(collegue))
      )
  }

  creerCollegue(col: CollegueForm): Observable<Collegue> {
    return this.http.post<CollegueBack>(`${URL_BACKEND}/collegues`, col)
    .pipe(
      map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenoms, colBack.email, 
                                  new Date(colBack.dateDeNaissance), colBack.photoUrl))); 
  }

  recupererAll(): Observable<CollegueGalerie[]> {
    return this.http.get<CollegueGalerie[]>(`${URL_BACKEND}/collegues/photos`);
  }
}

