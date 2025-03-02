import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Residence } from 'src/app/Core/models/Residence';
import { Apartment } from 'src/app/Core/models/Apartement';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.residenceForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([])
    });
  }

  get apartments(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }

  addApartment(): void {
    const apartmentForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', Validators.required],
      terrace: ['', Validators.required],
      surfaceTerrace: [{ value: '', disabled: true }, Validators.required],
      category: ['', Validators.required]
    });

    this.apartments.push(apartmentForm);
  }

  removeApartment(index: number): void {
    this.apartments.removeAt(index);
  }

  onSubmit(): void {
    if (this.residenceForm.valid) {
      const newResidence: Residence = this.residenceForm.value;
      console.log('Nouvelle résidence créée :', newResidence);
    }
  }
  onTerraceChange(index: number, value: string): void {
    const apartment = this.apartments.at(index);

    if (value === 'yes') {
      apartment.get('surfaceTerrace')?.enable();
    } else {
      apartment.get('surfaceTerrace')?.disable();
      apartment.get('surfaceTerrace')?.setValue(''); // Réinitialise la valeur
    }
  }

}
