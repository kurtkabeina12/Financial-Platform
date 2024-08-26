const PlatformBalance = require('../api/models/PlatformBalance.js');

describe('PlatformBalance Model', () => {
    test('should create a new platform balance instance', () => {
        const platformBalance = PlatformBalance.build({
            asset_id: '12345',
            balance: 5000,
        });
        expect(platformBalance.asset_id).toBe('12345');
        expect(platformBalance.balance).toBe(5000);
    });
});