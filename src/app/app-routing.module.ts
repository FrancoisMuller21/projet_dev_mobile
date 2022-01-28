import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GraphiqueComponent } from './graphique/graphique.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component: AccueilComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'graphique', component: GraphiqueComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
