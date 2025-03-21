import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SingleJokeComponent } from './components/single-joke/single-joke.component';

export const routes: Routes = [
{path:'', component: HomeComponent},
{path:'category/:category', component: CategoryComponent},
{ path: 'favorites', component: FavoritesComponent },
{ path: 'single', component: SingleJokeComponent }
];
