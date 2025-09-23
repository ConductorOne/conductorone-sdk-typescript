/// <reference types="jest" />
import { sdk } from '../setup';

describe('appEntitlementSearch', () => {
  it('search should return status 200 and valid response', async () => {
    const res = await sdk.appEntitlementSearch.search({ appIds: [] }, {
    });
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(200);
    expect(!!res.appEntitlementSearchServiceSearchResponse).toBe(true);
  });

  it('searchGrants should return status 200 and valid response', async () => {
    const res = await sdk.appEntitlementSearch.searchGrants({ appIds: [] }, {
    });
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(200);
    expect(!!res.appEntitlementSearchServiceSearchGrantsResponse).toBe(true);
  });
});
