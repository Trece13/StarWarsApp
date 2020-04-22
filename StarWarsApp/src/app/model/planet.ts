import { film } from './film';

export class planet{

    name: string;
	rotation_period:number;
	orbital_period:number;
	diameter:number;
	climate:string;
	gravity:string;
	terrain:string;
	surface_water:string;
	population:number;
	films: film[] = [];
	created: Date;
	edited: Date;
	url:string;

}