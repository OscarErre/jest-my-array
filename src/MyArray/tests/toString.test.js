import { MyArray } from '../MyArray';
import { toString } from '../methods/toString/index';

describe('toString method', () => {

    let array;

    const values = [1,2,3,4];

    beforeEach(() => {
        array = new MyArray(...values);
    })

    test('toString returns a string', () => {
        const string = array.toString();

        expect(typeof string).toBe('string');
    });

    it('should return the expected string', () => {

        expect(typeof array).not.toBe('string');

        const expected = values.toString();

        expect(array.toString()).toEqual(expected);
        expect(typeof array.toString()).toBe('string');
    });
});
