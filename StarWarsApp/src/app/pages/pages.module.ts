import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SearchComponent } from '../components/search/search.component';
import { ComponentsModule } from '../components/components.module';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    MovieComponent,
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
