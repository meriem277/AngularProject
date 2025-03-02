import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  residences = [
    { id: 1, name: 'Résidence A' },
    { id: 2, name: 'Résidence B' },
    { id: 3, name: 'Résidence C' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', Validators.required],
      floorNumber: ['', Validators.required],
      surface: ['', Validators.required],
      terrace: ['no'],
      surfaceTerrace: [''],
      category: ['', Validators.required],
      residence: ['', Validators.required]
    });
  }

  addApartment() {
    if (this.apartForm.valid) {
      console.log('Appartement ajouté :', this.apartForm.value);
    }
  }

  resetForm() {
    this.apartForm.reset({ terrace: 'no' });
  }
}
