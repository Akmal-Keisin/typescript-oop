"use strict";
describe('Static', () => {
    class AnimalHelper {
        static makeSound(animalName) {
            const name = animalName.toLowerCase();
            switch (name) {
                case 'dog':
                    return 'Woof!';
                case 'cat':
                    return 'Meow!';
                default:
                    return 'Animal not registered yet';
            }
        }
    }
    AnimalHelper.NAME = 'Animal Helper';
    AnimalHelper.VERSION = '1.0.0';
    AnimalHelper.DESCRIPTION = 'Helper to help you interact with animal';
    it('should be able to implement static class', () => {
        expect(AnimalHelper.NAME).toBe('Animal Helper');
        expect(AnimalHelper.VERSION).toBe('1.0.0');
        expect(AnimalHelper.DESCRIPTION).toBe('Helper to help you interact with animal');
        expect(AnimalHelper.makeSound('Dog')).toBe('Woof!');
        expect(AnimalHelper.makeSound('Cat')).toBe('Meow!');
        expect(AnimalHelper.makeSound('Crocodile')).toBe('Animal not registered yet');
    });
});
