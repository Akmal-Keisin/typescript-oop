"use strict";
describe('Properties', () => {
    class Customer {
        constructor(id, name, age, address) {
            this.address = 'Unknown';
            this.id = id;
            this.name = name;
            this.age = age;
            // Will be passed undefined if not provided
            if (address) {
                this.address = address;
            }
        }
    }
    it('should have properties', () => {
        const customer = new Customer(1, 'Keisin', 21);
        expect(customer).toHaveProperty('id');
        expect(customer).toHaveProperty('name');
        expect(customer.age).toBe(21);
        expect(customer.address).toBe('Unknown');
    });
});
