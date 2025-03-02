import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/app/Core/models/Apartement';
@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  terraceChecked: boolean = false;
  newApart!: Apartment;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', Validators.required],
      terrace: ['', Validators.required],
      surfaceTerrace: [{ value: '', disabled: true }, Validators.required],
      category: ['', Validators.required],
      residence: ['', Validators.required]
    });
  }

  onTerraceChange(value: string): void {
    this.terraceChecked = value === 'yes';
    if (this.terraceChecked) {
      this.apartForm.get('surfaceTerrace')?.enable();
    } else {
      this.apartForm.get('surfaceTerrace')?.disable();
      this.apartForm.get('surfaceTerrace')?.reset();
    }
  }

  onSubmit(): void {
    if (this.apartForm.valid) {
      this.newApart = {
        apartmentNumber: this.apartForm.value.apartmentNumber,
        floorNumber: this.apartForm.value.floorNumber,
        surface: this.apartForm.value.surface,
        terrace: this.apartForm.value.terrace,
        surfaceTerrace: this.terraceChecked ? this.apartForm.value.surfaceTerrace : undefined,
        category: this.apartForm.value.category,
        residence: this.apartForm.value.residence
      };
      console.log('Nouveau appartement ajouté :', this.newApart);
    }
  }
}
