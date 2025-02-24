"use strict";
describe('Interface Inheritance', () => {
    /**
     * Child Interface that inherits from Animal and AnimalAbility
     * The implements keyword is used to inherit from an interface
     */
    class Cat {
        constructor(name, ability) {
            this.name = name;
            this.ability = ability;
        }
        showAbility() {
            return this.ability;
        }
    }
    it('should be able to inherit from an interface', () => {
        const cat = new Cat('Marta', 'stealth');
        expect(cat.name).toBe('Marta');
        expect(cat.showAbility()).toBe('stealth');
    });
});
