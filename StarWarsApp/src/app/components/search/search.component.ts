import { Component, OnInit } from '@angular/core';
import { StarWarsServiceService } from 'src/app/services/star-wars-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public starWarsService:StarWarsServiceService) { }

  searchMovieByName( txMovieName: string ){
    console.log( txMovieName );
    this.starWarsService.getStarWarsMoviesByName(txMovieName)
                        .subscribe( data => this.starWarsService.moviesList = data);
  }

  ngOnInit() {
  }

}
