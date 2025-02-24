"use strict";
describe('Inheritance', () => {
    // Parent Class
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // Child Class that inherits from Animal
    class Cat extends Animal {
        constructor(name, age) {
            // Call the parent constructor
            super(name);
            this.age = age;
        }
    }
    it('should be able to inherit from a class', () => {
        const cat = new Cat('Marta', 3);
        expect(cat.name).toBe('Marta');
        expect(cat.age).toBe(3);
    });
});
