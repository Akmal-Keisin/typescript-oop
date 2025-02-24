"use strict";
describe('Class Relationship', () => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Beast {
        constructor(name) {
            this.name = name;
        }
    }
    it('Should be able to input object with different class with same properties and method', () => {
        const beast = new Animal('Dog');
        const animal = new Beast('Lion');
        expect(beast).toBeInstanceOf(Animal);
        expect(animal).toBeInstanceOf(Beast);
    });
});
