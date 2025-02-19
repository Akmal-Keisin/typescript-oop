describe('Getter and Setter', () => {
	class Customer {
		private _name?: string;

		get name(): string {
			if (!this._name) {
				return 'No Name.';
			}
			return this._name;
		}

		set name(value: string) {
			if (value !== '') {
				this._name = value;
			}
		}
	}
	it('should have getter and setter', () => {
		const customer = new Customer();
		expect(customer.name).toBe('No Name.');

		customer.name = 'Keisin';
		expect(customer.name).toBe('Keisin');
	});
});
