describe('Methods', () => {
	class Customer {
		constructor(public name: string) {}

		// Method
		greetings() {
			return `Hello, my name is ${this.name}`;
		}
	}

	it('should have methods', () => {
		const customer = new Customer('Keisin');
		expect(customer.greetings()).toBe('Hello, my name is Keisin');
	});
});
