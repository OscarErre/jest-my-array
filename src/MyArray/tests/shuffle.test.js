import  { shuffle } from '../methods/shuffle/index';

import { MyArray } from '../MyArray';

describe('0shuffle method', () => {

    let array;

    const values = ["A", "B", "C", "D"];

    beforeEach(() => {
        array = new MyArray(...values);
    });

    it('should return a MyArray', () => {

        const newArray = array.shuffle();

        expect(newArray).toBeInstanceOf(MyArray);
    });

    test('new array length is equal than old one', () => {

        const newArray = array.shuffle();

        expect(newArray.length).toEqual(array.length);
    });

    test('all values are the same', () => {
        const newArray = array.shuffle();

        newArray.forEach(item => {
            expect(values.includes(item)).toBeTruthy()
        });
    });
});