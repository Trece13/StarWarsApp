import { planet } from './planet';
import { starship } from './starship';
import { specie } from './specie';

export class film{
    
	title:string;
	episode_id:number;
	opening_crawl:string;
	director:string;
	producer:string;
	release_date: Date;
	planets: planet[] = [];
	starships: starship[] = [];
	species: specie[] = [];
	created: Date;
	edited: Date;
    url:string;
    
}