import { sdk } from '../setup';

describe('appResourceSearch', () => {
  it('searchAppResources should return status 200 and valid response', async () => {
    const res = await sdk.appResourceSearch.searchAppResources({ pageSize: 1 });
    
    expect(res.statusCode).toBe(200);
    expect(!!res.searchAppResourcesResponse).toBe(true);
  });
});
