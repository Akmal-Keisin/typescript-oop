describe('Abstract Class', () => {
	abstract class Animal {
		abstract category: string;
		constructor(public name: string) {}
		abstract makeSound(): string;
	}

	class Cat extends Animal {
		constructor(
			name: string,
			public category: string,
		) {
			super(name);
		}

		makeSound() {
			return 'Meow!';
		}
	}

	it('should be able to implement abstract class', () => {
		const cat = new Cat('Marta', 'Angora');
		expect(cat.makeSound()).toBe('Meow!');
		expect(cat.category).toBe('Angora');
	});
});
