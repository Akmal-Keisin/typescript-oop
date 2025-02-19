describe('Method Overriding', () => {
	class Animal {
		constructor(public name: string) {}

		// Parent Method
		speak(): string {
			return 'Hello';
		}
	}

	class Cat extends Animal {
		constructor(name: string) {
			super(name);
		}

		// Child Method
		speak(): string {
			return 'Meow';
		}
	}

	it('should be able to override a method', () => {
		const cat = new Cat('Marta');

		expect(cat.speak()).toBe('Meow');
	});
});
