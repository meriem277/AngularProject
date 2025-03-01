import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  listResidences = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../assets/images/image1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../assets/images/image2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../assets/images/image3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../assets/images/image4.jpg", status: "En Construction" }
  ];
  favoritesList: { id: number; name: string; address: string; image: string; status: string }[] = [];
  searchText: string = '';

  @ViewChild('carousel') carousel!: ElementRef;

  ngOnInit(): void {}

  // Défilement vers la gauche
  scrollLeft(): void {
    const carousel = this.carousel.nativeElement;
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  }

  // Défilement vers la droite
  scrollRight(): void {
    const carousel = this.carousel.nativeElement;
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  }
  showLocation(residence: any): void {
    if (residence.address && residence.address.toLowerCase() !== 'inconnu') {
      alert(`Adresse : ${residence.address}`);
    } else {
      alert("L'adresse de cette résidence est inconnue.");
    }
  }
  addToFavorites(residence: any): void {
    if (!this.favoritesList.some(fav => fav.id === residence.id)) {
      this.favoritesList.push(residence);
    }
  }
  filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
