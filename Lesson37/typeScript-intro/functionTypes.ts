// Simple Function Type
const greet: (name: string) => string = function (name: string) {
	return `Hello, ${name}!`;
};

greet('Jane');

// Function Type with Optional Parameters
let logMessage: (message: string, userId?: string) => void = function (
	message: string,
	userId?: string
): void {
	console.log(`Message: ${message}, User ID: ${userId ?? 'Not provided'}`);
};

logMessage('Test message');

// Function Type for Callbacks
const processUserInput: (
	input: string,
	callback: (response: string) => void
) => void = function (input: string, callback: (response: string) => void) {
	// Process the input...
	const response = `Processed input: ${input}`;
	callback(response);
};

processUserInput('Input', (response) => console.log('This is input value:', response));
