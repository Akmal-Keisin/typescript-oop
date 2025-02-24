describe('Static', () => {
	class AnimalHelper {
		static NAME: string = 'Animal Helper';
		static VERSION: string = '1.0.0';
		static DESCRIPTION: string = 'Helper to help you interact with animal';

		static makeSound(animalName: string): string {
			const name = animalName.toLowerCase();
			switch (name) {
				case 'dog':
					return 'Woof!';
				case 'cat':
					return 'Meow!';
				default:
					return 'Animal not registered yet';
			}
		}
	}

	it('should be able to implement static class', () => {
		expect(AnimalHelper.NAME).toBe('Animal Helper');
		expect(AnimalHelper.VERSION).toBe('1.0.0');
		expect(AnimalHelper.DESCRIPTION).toBe(
			'Helper to help you interact with animal',
		);
		expect(AnimalHelper.makeSound('Dog')).toBe('Woof!');
		expect(AnimalHelper.makeSound('Cat')).toBe('Meow!');
		expect(AnimalHelper.makeSound('Crocodile')).toBe(
			'Animal not registered yet',
		);
	});
});
