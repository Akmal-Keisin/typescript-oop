describe('Class Relationship', () => {
	class Animal {
		constructor(public name: string) {}
	}

	class Beast {
		constructor(public name: string) {}
	}

	it('Should be able to input object with different class with same properties and method', () => {
		const beast: Beast = new Animal('Dog');
		const animal: Animal = new Beast('Lion');

		expect(beast).toBeInstanceOf(Animal);
		expect(animal).toBeInstanceOf(Beast);
	});
});
