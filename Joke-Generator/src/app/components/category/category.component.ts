import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category: string = '';
  joke: any = null;
  showDelivery = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.fetchJokeByCategory(this.category);
    });
  }

  fetchJokeByCategory(category: string) {
    this.showDelivery = false;
    fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart`)
      .then(res => res.json())
      .then(data => {
        this.joke = data;
      })
      .catch(err => {
        console.error('Error fetching joke by category:', err);
      });
  }

  revealDelivery() {
    this.showDelivery = true;
  }
}
