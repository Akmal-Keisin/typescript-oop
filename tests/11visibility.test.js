"use strict";
describe('Visibility', () => {
    class Animal {
        constructor(name, age, color) {
            this.name = name;
            this._age = age;
            this.color = color;
        }
        // Public method
        showAge() {
            return this.age;
        }
        // Private method
        showColor() {
            return this.color;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
        // Protected method
        showName() {
            return this.name;
        }
    }
    class Cat extends Animal {
        constructor(name, age, color) {
            super(name, age, color);
        }
        showProperties() {
            return `${this.name} ${this.age} ${this.color}`;
        }
    }
    it('should have public, private, protected properties and methods', () => {
        const cat = new Cat('Marta', 3, 'black');
        expect(cat.name).toBe('Marta');
        expect(cat.age).toBe(3);
        expect(cat.showAge()).toBe(3);
    });
});
