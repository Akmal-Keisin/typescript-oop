describe('Inheritance', () => {
	class Animal {
		constructor(public name: string) {}
	}

	class Cat extends Animal {
		constructor(
			name: string,
			public age: number,
		) {
			// Call the parent constructor
			super(name);
		}
	}

	it('should be able to inherit from a class', () => {
		const cat = new Cat('Marta', 3);

		expect(cat.name).toBe('Marta');
		expect(cat.age).toBe(3);
	});
});
