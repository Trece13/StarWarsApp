import { film } from './film';

export class starship{

    name:string;
	model: string;
	manufacturer:number;
	cost_in_credits:number;
	length:number;
	max_atmosphering_speed:string;
	crew:number;
	passengers:number;
	cargo_capacity:number;
	consumables:string;
	hyperdrive_rating:string;
	MGLT:string;
	starship_class:string;
	films:film[] = [];
	created:Date;
	edited:Date;
	url:string;

}