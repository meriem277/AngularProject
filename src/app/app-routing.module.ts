import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'apartments', component: ApartmentsComponent } // Assure-toi que ApartmentsComponent existe

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
