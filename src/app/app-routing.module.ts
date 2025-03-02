import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from  './residences/add-residence/add-residence.component' ;
import { NotFoundComponent } from './not-found/not-found.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';

const routes: Routes = [

  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path :'AddApartment' , component: AddApartmentComponent} ,
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent} ,// Assure-toi que ApartmentsComponent existe
  { path: 'residence-details/:id', component: ResidenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent} ,
  { path: '**', component: NotFoundComponent },
 //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
