describe('Constructor', () => {
	class Customer {
		constructor(public name: string) {}
	}

	class Order {
		constructor(public id: number) {}
	}

	it('should return a new instance of a class with a constructor', () => {
		const customer = new Customer('Keisin');
		const order = new Order(1);
		expect(customer.name).toBe('Keisin');
		expect(order.id).toBe(1);
	});
});
