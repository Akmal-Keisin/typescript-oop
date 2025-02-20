"use strict";
describe('Parameter Properties', () => {
    class Animal {
        constructor(name, age, color) {
            this.name = name;
            this.age = age;
            this.color = color;
        }
        showProperties() {
            return `${this.name} ${this.age} ${this.color}`;
        }
    }
    it('should have parameter properties', () => {
        const animal = new Animal('Marta', 3, 'black');
        expect(animal.showProperties()).toBe('Marta 3 black');
    });
});
