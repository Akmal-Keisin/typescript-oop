"use strict";
describe('Method Overriding', () => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        // Parent Method
        speak() {
            return 'Hello';
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        // Child Method
        speak() {
            return 'Meow';
        }
    }
    it('should be able to override a method', () => {
        const cat = new Cat('Marta');
        expect(cat.speak()).toBe('Meow');
    });
});
