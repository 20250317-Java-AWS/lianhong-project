import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteJokesService {
  private favorites: any[] = [];

  getFavorites(){
    return this.favorites;
  }

  addToFavorites(joke: any){
    if(!this.favorites.find(j => j.setup == joke.setup && j.delivery == joke.delivery)){
      this.favorites.push(joke);
    }
  }
  removeFromFavorites(index: number) {
    this.favorites.splice(index, 1);
  }
  constructor() { }
}
