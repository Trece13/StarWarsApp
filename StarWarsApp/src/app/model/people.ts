import { film } from './film';
import { specie } from './specie';
import { starship } from './starship';

export class people{
    
    name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string
	homeworld: string;
	films: film[] = [];
	species: specie[] = [];
	starships: starship[] = [];
	created: Date;
	edited: Date;
	url: string;

}