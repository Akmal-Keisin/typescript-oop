describe('Parameter Properties', () => {
	class Animal {
		constructor(
			public name: string,
			private age: number,
			protected color: string,
		) {}

		showProperties(): string {
			return `${this.name} ${this.age} ${this.color}`;
		}
	}

	it('should have parameter properties', () => {
		const animal = new Animal('Marta', 3, 'black');
		expect(animal.showProperties()).toBe('Marta 3 black');
	});
});
