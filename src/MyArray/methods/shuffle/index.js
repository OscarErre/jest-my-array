import { MyArray } from "../../MyArray";

export function shuffle () {

	let randomized = new MyArray();
	let indexs_list = [];

	for (let i=0; i<this.length; i++) {
		indexs_list.push(i);
    }

	for (let i=0; i<this.length; i++) {
		let random = Math.floor(Math.random()*indexs_list.length);
		randomized.push (this[indexs_list[random]]);
		
		indexs_list.splice(random,1);
    }

	return randomized;
}