import { Component, OnInit } from '@angular/core';
import { StarWarsServiceService } from 'src/app/services/star-wars-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  

  constructor(public starWarsService:StarWarsServiceService) { 

    this.starWarsService.getStarWarsMovies("films")
                        .subscribe(data => this.starWarsService.moviesList = data);
  }

  ngOnInit() {
  }

}
