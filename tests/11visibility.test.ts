describe('Visibility', () => {
	class Animal {
		// Public property
		public name: string;

		// Private property
		private _age: number;

		// Protected property
		protected color: string;

		constructor(name: string, age: number, color: string) {
			this.name = name;
			this._age = age;
			this.color = color;
		}

		// Public method
		public showAge(): number {
			return this.age;
		}

		// Private method
		private showColor(): string {
			return this.color;
		}

		get age(): number {
			return this._age;
		}

		set age(value: number) {
			if (value > 0) {
				this._age = value;
			}
		}

		// Protected method
		protected showName(): string {
			return this.name;
		}
	}

	class Cat extends Animal {
		constructor(name: string, age: number, color: string) {
			super(name, age, color);
		}

		showProperties(): string {
			return `${this.name} ${this.age} ${this.color}`;
		}
	}

	it('should have public, private, protected properties and methods', () => {
		const cat = new Cat('Marta', 3, 'black');
		expect(cat.name).toBe('Marta');
		expect(cat.age).toBe(3);
		expect(cat.showAge()).toBe(3);
	});
});
