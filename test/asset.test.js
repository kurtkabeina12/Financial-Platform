const Asset = require('../api/models/Asset.js');
describe('Asset Model', () => {
    test('should create a new asset instance', () => {
        const asset = Asset.build({
            name: 'Bitcoin',
            symbol: 'BTC',
        });
        expect(asset.name).toBe('Bitcoin');
        expect(asset.symbol).toBe('BTC');
    });
});