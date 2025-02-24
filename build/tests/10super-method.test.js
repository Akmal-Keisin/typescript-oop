"use strict";
describe('Super Method', () => {
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
            // Call the parent method speak()
            return super.speak() + ' Meow';
        }
    }
    it('should be able to call the parent method', () => {
        const cat = new Cat('Marta');
        expect(cat.speak()).toBe('Hello Meow');
    });
});
