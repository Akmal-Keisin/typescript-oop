"use strict";
describe('Type Cast', () => {
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
    function sayHello(animal) {
        if (animal instanceof Cat) {
            const cat = animal;
            return `Meow! ${cat.name}`;
        }
        else if (animal instanceof Dog) {
            const dog = animal;
            return `Woof! ${dog.name}`;
        }
        else {
            return '...';
        }
    }
    it('should be able to cast type', () => {
        const cat = new Cat('Marta');
        const dog = new Dog('Buddy');
        const animal = new Animal('Animal');
        expect(sayHello(cat)).toBe('Meow! Marta');
        expect(sayHello(dog)).toBe('Woof! Buddy');
        expect(sayHello(animal)).toBe('...');
    });
});
