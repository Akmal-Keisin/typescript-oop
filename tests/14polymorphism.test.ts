describe('Polymorphism', () => {
	class Animal {
		constructor(public name: string) {}
		makeSound() {
			return '...';
		}
	}

	class Cat extends Animal {
		constructor(name: string) {
			super(name);
		}
		makeSound() {
			return 'Meow!';
		}
	}

	class Dog extends Animal {
		constructor(name: string) {
			super(name);
		}
		makeSound() {
			return 'Woof!';
		}
	}

	class Car {
		constructor(public name: string) {}
	}

	it('should be able to implement polymorphism', () => {
		let animal: Animal = new Animal('Animal');
		animal = new Cat('Marta');
		expect(animal.makeSound()).toBe('Meow!');

		animal = new Dog('Buddy');
		expect(animal.makeSound()).toBe('Woof!');

		const throwError = () => {
			// animal = new Car('Lamborgini');
			throw new Error(
				"Property 'makeSound' is missing in type 'Car' but required in type 'Animal'.",
			);
		};

		expect(throwError).toThrow(Error);
	});
});
