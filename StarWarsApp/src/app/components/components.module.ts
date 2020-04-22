import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    DetailComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent
  ],
  exports: [
    CardComponent,
    DetailComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule 
  ]
})
export class ComponentsModule { }
