describe('Type Cast', () => {
	class Animal {
		constructor(public name: string) {}
	}

	class Cat extends Animal {
		constructor(name: string) {
			super(name);
		}
	}

	class Dog extends Animal {
		constructor(name: string) {
			super(name);
		}
	}

	function sayHello(animal: Animal) {
		if (animal instanceof Cat) {
			const cat = animal as Cat;
			return `Meow! ${cat.name}`;
		} else if (animal instanceof Dog) {
			const dog = animal as Dog;
			return `Woof! ${dog.name}`;
		} else {
			return '...';
		}
	}

	it('should be able to cast type', () => {
		const cat = new Cat('Marta');
		const dog = new Dog('Buddy');
		const animal = new Animal('Animal');

		expect(sayHello(cat)).toBe('Meow! Marta');
		expect(sayHello(dog)).toBe('Woof! Buddy');
		expect(sayHello(animal)).toBe('...');
	});
});
