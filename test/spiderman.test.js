const Spiderman = require('./../app/spiderman');

describe("Unit tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      const andrewGarfield = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')
      expect(andrewGarfield.name).toBe('Spiderman Sony')
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe('Andrew Garfield')
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe('Sony')
    });
    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel')
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
      });
  })