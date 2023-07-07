compareTriplets = require('../CompareTriplets.js')

describe('CompareTriplets', () => {

    test('should return [1, 1] when given [1, 2, 3] and [3, 2, 1]', () => {
        // Arrange
        const a = [1, 2, 3];
        const b = [3, 2, 1];

        // Act
        const result = compareTriplets(a, b);

        // Assert
        const expectedResult = [1, 1];
        expect(result).toEqual(expectedResult);
    })

})