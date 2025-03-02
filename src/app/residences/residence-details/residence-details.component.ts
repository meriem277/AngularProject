import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  listResidences = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../assets/images/image1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../assets/images/image2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../assets/images/image3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "Inconnu", image: "../assets/images/image4.jpg", status: "En Construction" }
  ];

  residence: any;
  currentIndex: number = -1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.currentIndex = this.listResidences.findIndex(r => r.id === id);
      this.residence = this.listResidences[this.currentIndex];
    });
  }

  nextResidence(): void {
    if (this.currentIndex < this.listResidences.length - 1) {
      const nextId = this.listResidences[this.currentIndex + 1].id;
      this.router.navigate(['/residence-details', nextId]);
    } else {
      alert("C'est la dernière résidence !");
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'disponible': return 'status-disponible';
      case 'vendu': return 'status-vendu';
      case 'en construction': return 'status-construction';
      default: return '';
    }
  }
}
