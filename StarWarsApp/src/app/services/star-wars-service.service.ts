import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StarWarsServiceService {


    moviesList: any[] = [];  

    constructor(private http: HttpClient) { 

    }
    
    getDataStarWarsApi( urlParams : string, notGeneric:boolean = true){
      
      let result: any;
      
      if(notGeneric){
        result = this.http.get(`https://swapi.py4e.com/api/${urlParams}`);
      }
      else{
        result = this.http.get(urlParams);
      }

      return result
    }

    getStarWarsMovies(entity:string){
      
      return this.getDataStarWarsApi('films')
                .pipe(map((data:any) => {return data.results}));
                //.subscribe(data => console.log(data));
    }

    getStarWarsMoviesByName(name:string){
      
      return this.getDataStarWarsApi(`films/?search=${name.trim()}`)
                .pipe(map((data:any) => {return data.results}));
                //.subscribe(data => console.log(data));
    }

    getStarWarsMoviesById(id:number){
      return this.getDataStarWarsApi(`films/${id}/`)
                .pipe(map((data:any) => {return data}));

    }

    getStarWarsPlanetsById(id:number){
      return this.getDataStarWarsApi(`planets/${id}/`)
                .pipe(map((data:any) => {return data}));
    }

    getStarWarsSpeciesById(id:number){
      return this.getDataStarWarsApi(`species/${id}/`)
                .pipe(map((data:any) => {return data}));
    }

    getStarWarsStarshipsById(id:number){
      return this.getDataStarWarsApi(`starships/${id}/`)
                .pipe(map((data:any) => {return data}));
    }

    getStarWarsStarGeneric(urlRequest:string){
      return this.getDataStarWarsApi(urlRequest,false)
                .pipe(map((data:any) => {return data}));
    }
}
