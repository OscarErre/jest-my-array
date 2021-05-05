import {
    concat, every, fill, filter, find,
    findIndex, forEach, includes, indexOf,
    join, map, pop, push, reduce, reverse,
    shift, shuffle, slice, some, sort,
    splice, toString, unshift
} from './methods';

export function MyArray() {
    for (let i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

MyArray.prototype.forEach = forEach;

MyArray.prototype.push = push;

MyArray.prototype.shift = shift;

MyArray.prototype.unshift = unshift;

MyArray.prototype.pop = pop;

MyArray.prototype.join = join;

MyArray.prototype.map = map;

MyArray.prototype.concat = concat;

MyArray.prototype.every = every;

MyArray.prototype.fill = fill;

MyArray.prototype.filter = filter;

MyArray.prototype.findIndex = findIndex;

MyArray.prototype.find = find;

MyArray.prototype.includes = includes;

MyArray.prototype.indexOf = indexOf;

MyArray.prototype.reduce = reduce;

MyArray.prototype.reverse = reverse;

MyArray.prototype.slice = slice;

MyArray.prototype.some = some;

MyArray.prototype.sort = sort;

MyArray.prototype.splice = splice;

MyArray.prototype.shuffle = shuffle;

MyArray.prototype.toString = toString;