import { MyArray } from '../MyArray';
import * as methods from '../methods';

jest.mock('../methods', () => ({
    push: jest.fn()
}));

describe('MyArray', () => {
    
    test('push method is called', () => {
        const array = new MyArray(1,2,3);
        
        array.push(2);
        expect(methods.push).toHaveBeenCalled();
    });
});
