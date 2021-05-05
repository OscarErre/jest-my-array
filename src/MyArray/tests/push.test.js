import { MyArray } from "../MyArray";

describe('push method', () => {

    let array;
    const values = [1,2,3];
    const pushedValue = "A";

    beforeEach ( () => {
        array = new MyArray(...values);
    });

    it('should add a new value at the end of MyArray', () => {
        const expectedArray = new MyArray(...values, pushedValue);

        array.push(pushedValue);
        expect(array).toEqual(expectedArray);
    });

    test('array length increases when pushing a value', () => {
        expect(array.length).toBe(values.length);
        array.push(pushedValue);
        expect(array.length).toBe(values.length+1);
    });

    test('push method returns the new length', () => {
        expect(array.push(pushedValue)).toBe(4);
    });

    it('should push multiple items to MyArray', () => {
        const newValues = [3,4,5];

        const testResult = new MyArray(...values, ...newValues);

        array.push(...newValues);

        expect(array).toEqual(testResult);
        expect(array.length).toBe(values.length + newValues.length)
    });
});