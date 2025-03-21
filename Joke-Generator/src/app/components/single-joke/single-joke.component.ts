import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-single-joke',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, NavComponent],
  templateUrl: './single-joke.component.html',
  styleUrls: ['./single-joke.component.css']
})
export class SingleJokeComponent implements OnInit {
  categories: string[] = ['Programming', 'Misc', 'Pun', 'Dark', 'Spooky', 'Christmas'];
  selectedCategory: string = 'Programming';

  joke: string = '';
  jokeCategory: string = '';
  isLoading = false;
  error: string | null = null;

  ngOnInit(): void {
    //auto-fetch on load
    this.fetchJoke();
  }
  fetchJoke() {
    this.isLoading = true;
    this.error = null;
    this.joke = '';
    this.jokeCategory = '';

    const apiUrl = `https://v2.jokeapi.dev/joke/${this.selectedCategory}?type=single`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data && data.joke) {
          this.joke = data.joke;
          this.jokeCategory = data.category;
        } else {
          this.error = 'No joke found.';
        }
        this.isLoading = false;
      })
      .catch(() => {
        this.error = 'Failed to fetch joke.';
        this.isLoading = false;
      });
  }
}
