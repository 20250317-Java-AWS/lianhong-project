import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteJokesService } from '../../services/favorite-jokes.service';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule,NavComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = ['Programming', 'Misc', 'Pun', 'Dark', 'Spooky', 'Christmas'];

  selectedCategory: string = '';
  joke: any = null;
  showDelivery = false;
  error: string | null = null;

  constructor(private favService: FavoriteJokesService) {}


  ngOnInit(): void {
    //
    this.selectedCategory = 'Programming';
    this.fetchJoke();
  }


  saveToFavorites(){
    if(this.joke){
      this.favService.addToFavorites(this.joke);
    }
  }


  fetchJoke() {
    this.showDelivery = false;
    if (!this.selectedCategory) return;

    const apiUrl = `https://v2.jokeapi.dev/joke/${this.selectedCategory}?type=twopart`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data && data.setup && data.delivery) {
          this.joke = data;
        } else {
          this.error = 'No joke found. Try again!';
        }
      })
      .catch(() => {
        this.error = 'Failed to fetch joke. Please try again.';
      });
  }

  revealDelivery() {
    this.showDelivery = true;
  }

  resetJoke() {
    this.joke = null;
    this.showDelivery = false;
    this.error = null;
  }
}

