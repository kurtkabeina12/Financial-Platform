const Client = require('../api/models/Client.js');

describe('Client Model', () => {
    test('should create a new client instance', () => {
        const client = Client.build({
            name: 'John Doe',
            balance: 1000,
        });
        expect(client.name).toBe('John Doe');
        expect(client.balance).toBe(1000);
    });
});