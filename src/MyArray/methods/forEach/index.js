export function forEach(expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	for (let i = 0; i < this.length; i++) 
		expression(this[i], i, this);
}