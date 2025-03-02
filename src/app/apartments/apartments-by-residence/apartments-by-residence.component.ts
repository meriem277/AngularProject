import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent
{
  apartments = [
    { id: 1, name: 'Appartement A' },
    { id: 2, name: 'Appartement B' }
  ];

}
