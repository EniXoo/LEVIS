import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Levis';
  ticketsPlein = 0;
  ticketsEtudiant = 0;
  ticketsEnfant = 0;
  currentPage: string = 'HOME';
  ticketsEnfantD = 0;
  ticketsEtudiantD = 0;
  ticketsPleinD = 0;

  incrementTicketsPlein() {
    this.ticketsPlein++;
  }

  incrementTicketsEtudiant() {
    this.ticketsEtudiant++;
  }

  incrementTicketsEnfant() {
    this.ticketsEnfant++;
  }

  incrementTicketsPleinD() {
    this.ticketsPleinD++;
  }

  incrementTicketsEtudiantD() {
    this.ticketsEtudiantD++;
  }

  incrementTicketsEnfantD() {
    this.ticketsEnfantD++;
  }

  decrementTicketsPlein() {
    if(this.ticketsPlein > 0)
      this.ticketsPlein--;
  }

  decrementTicketsEtudiant() {
    if(this.ticketsEtudiant > 0)
      this.ticketsEtudiant--;
  }

  decrementTicketsEnfant() {
    if(this.ticketsEnfant > 0)
      this.ticketsEnfant--;
  }

  decrementTicketsPleinD() {
    if(this.ticketsPleinD > 0)
      this.ticketsPleinD--;
  }

  decrementTicketsEtudiantD() {
    if(this.ticketsEtudiantD > 0)
      this.ticketsEtudiantD--;
  }

  decrementTicketsEnfantD() {
    if(this.ticketsEnfantD > 0)
      this.ticketsEnfantD--;
  }

  setCurrentPage(page: string) {
    this.currentPage = page;
    this.ticketsPlein = 0;
    this.ticketsEtudiant = 0;
    this.ticketsEnfant = 0;
  }
}
