import { people } from './People';
import { film } from './film';

export class specie{

        name:string;
        classification:string;
        designation:string;
        average_height:number;
        skin_colors:string;
        hair_colors:string;
        eye_colors:string;
        average_lifespan:number;
        homeworld:string;
        language:string;
        people: people[] = [];
        films: film[] = [];
        created:Date;
        edited:string;
        url:string;    
        
}