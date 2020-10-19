import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageGalerieComponent } from './pages/page-galerie/page-galerie.component';
import { PageAProposComponent } from './pages/page-apropos/page-apropos.component';
import { PageCreerCollegueComponent } from './pages/page-creer-collegue/page-creer-collegue.component';
import { RouterModule, Routes } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { PageInfosCollegueComponent } from './pages/page-infos-collegue/page-infos-collegue.component';
import { InfosCollegueComponent } from './infos-collegue/infos-collegue.component';

const routes: Routes = [
  { path : 'accueil', component : PageAccueilComponent },
  { path : 'galerie', component : PageGalerieComponent },
  { path : 'aPropos', component : PageAProposComponent }, 
  { path : 'newCollegue', component : PageCreerCollegueComponent }, 
  { path : 'galerie/:matricule', component : PageInfosCollegueComponent },
  { path : '', pathMatch : 'full', redirectTo: '/accueil'}
]

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponent,
    PageAccueilComponent,
    PageGalerieComponent,
    PageAProposComponent,
    PageCreerCollegueComponent,
    GalerieComponent,
    PageInfosCollegueComponent,
    InfosCollegueComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
