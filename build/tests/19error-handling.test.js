"use strict";
describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.message = message;
        }
    }
    function testValidateEmail() {
        const wrongEmail = 'userexample.com';
        if (!wrongEmail.includes('@')) {
            throw new ValidationError('Email should contains "@" character');
        }
        return true;
    }
    it('should be able to implement error handling', () => {
        expect(testValidateEmail).toThrow(ValidationError);
    });
});
