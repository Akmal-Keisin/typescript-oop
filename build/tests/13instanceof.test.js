"use strict";
describe('Instanceof', () => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
    }
    it('should be able to check the type of an object', () => {
        const cat = new Cat('Marta');
        const dog = new Dog('Buddy');
        expect(cat instanceof Cat).toBe(true);
        expect(cat instanceof Animal).toBe(true);
        expect(cat instanceof Dog).toBe(false);
        expect(dog instanceof Dog).toBe(true);
        expect(dog instanceof Animal).toBe(true);
        expect(dog instanceof Cat).toBe(false);
    });
});
