import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsServiceService } from 'src/app/services/star-wars-service.service';
import { planet } from 'src/app/model/planet';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieActual:any; 

  constructor( public starWarsServiceService:StarWarsServiceService ,private route:ActivatedRoute ) { 
    this.starWarsServiceService.getStarWarsMoviesById(this.route.snapshot.params.id)
                              .subscribe( movie => {
                                this.movieActual = movie;
                                this.movieActual.planets = this.getArrayDataMovie(this.movieActual.planets);
                                this.movieActual.species = this.getArrayDataMovie(this.movieActual.species);
                                this.movieActual.starships = this.getArrayDataMovie(this.movieActual.starships);
                              });

  }

  getArrayDataMovie(myArray:any[]):any[]{
    let myDataRequest:any[] = [];   
    myArray.forEach( item => {
      this.starWarsServiceService.getStarWarsStarGeneric( item )
                                  .subscribe( request => {
                                    myDataRequest.push(request)
                                  });
    });
    return myDataRequest;
  }

  ngOnInit() {
  }

}
