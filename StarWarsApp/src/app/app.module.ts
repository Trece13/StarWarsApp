import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PagesModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
