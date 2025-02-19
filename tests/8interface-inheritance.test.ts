describe('Interface Inheritance', () => {
	// Parent Interface
	interface Animal {
		name: string;
	}

	interface AnimalAbility {
		ability: string;
		showAbility(): string;
	}

	/**
	 * Child Interface that inherits from Animal and AnimalAbility
	 * The implements keyword is used to inherit from an interface
	 */
	class Cat implements Animal, AnimalAbility {
		constructor(
			public name: string,
			public ability: string,
		) {}

		showAbility(): string {
			return this.ability;
		}
	}

	it('should be able to inherit from an interface', () => {
		const cat = new Cat('Marta', 'stealth');
		expect(cat.name).toBe('Marta');
		expect(cat.showAbility()).toBe('stealth');
	});
});
