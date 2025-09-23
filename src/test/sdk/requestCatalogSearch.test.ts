import { sdk } from '../setup';

describe('requestCatalogSearch', () => {
  it('searchEntitlements should return status 200 and valid response', async () => {
    const res = await sdk.requestCatalogSearch.searchEntitlements({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.requestCatalogSearchServiceSearchEntitlementsResponse).toBe(true);
  });
});
