"use strict";
describe('Polymorphism', () => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        makeSound() {
            return '...';
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        makeSound() {
            return 'Meow!';
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        makeSound() {
            return 'Woof!';
        }
    }
    class Car {
        constructor(name) {
            this.name = name;
        }
    }
    it('should be able to implement polymorphism', () => {
        let animal = new Animal('Animal');
        animal = new Cat('Marta');
        expect(animal.makeSound()).toBe('Meow!');
        animal = new Dog('Buddy');
        expect(animal.makeSound()).toBe('Woof!');
        const throwError = () => {
            // animal = new Car('Lamborgini');
            throw new Error("Property 'makeSound' is missing in type 'Car' but required in type 'Animal'.");
        };
        expect(throwError).toThrow(Error);
    });
});
