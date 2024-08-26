const Transaction = require('../api/models/Transaction.js');

describe('Transaction Model', () => {
    test('should create a new transaction instance', () => {
        const transaction = Transaction.build({
            user_id: '54321',
            asset_id: '12345',
            amount: 10,
            type: 'buy',
        });
        expect(transaction.user_id).toBe('54321');
        expect(transaction.asset_id).toBe('12345');
        expect(transaction.amount).toBe(10);
        expect(transaction.type).toBe('buy');
    });
});