import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteJokesService } from '../../services/favorite-jokes.service';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favService: FavoriteJokesService) {
    
  }
  ngOnInit(): void {
    this.favorites = this.favService.getFavorites();
  }

  remove(index: number) {
    this.favService.removeFromFavorites(index);
    this.favorites = this.favService.getFavorites(); // refresh the list
  }
}
