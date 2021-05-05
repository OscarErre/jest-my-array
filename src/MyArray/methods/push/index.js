export function push() { 
	for (let i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
}
