"use strict";
describe('Abstract Class', () => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Cat extends Animal {
        constructor(name, category) {
            super(name);
            this.category = category;
        }
        makeSound() {
            return 'Meow!';
        }
    }
    it('should be able to implement abstract class', () => {
        const cat = new Cat('Marta', 'Angora');
        expect(cat.makeSound()).toBe('Meow!');
        expect(cat.category).toBe('Angora');
    });
});
