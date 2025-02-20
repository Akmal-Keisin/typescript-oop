describe('Super Method', () => {
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
			// Call the parent method speak()
			return super.speak() + ' Meow';
		}
	}

	it('should be able to call the parent method', () => {
		const cat = new Cat('Marta');

		expect(cat.speak()).toBe('Hello Meow');
	});
});
