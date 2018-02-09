const fp = require('../lib/fp');

describe('forEach',() => {
    it('multiply each element by two', () => {
        let array = [1,2,3];
        let result = fp.forEach(array, function (num) {
            return num * 2;
        });
        let expected = [2,4,6];
        expect(result).toEqual(expected);
    })

    // it('should return hello world when world is supplied', () => {
    //     let str = 'world';
    //     let result = greet(str);
    //     let expected = 'hello world';
    //     expect(result).toBe(expected);
    // })

})