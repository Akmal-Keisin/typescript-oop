describe('Error Handling', () => {
	class ValidationError extends Error {
		constructor(public message: string) {
			super(message);
		}
	}

	function testValidateEmail(): boolean | ValidationError {
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
