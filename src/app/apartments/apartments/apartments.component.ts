import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent  implements OnInit {
  apartments = [
    { id: 1, name: 'Appartement A' },
    { id: 2, name: 'Appartement B' }
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
