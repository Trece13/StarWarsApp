import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'movies', component:MoviesComponent},
  {path:'movie/:id', component:MovieComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
