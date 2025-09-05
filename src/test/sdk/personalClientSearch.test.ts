import { sdk, authHeaders } from '../setup';

describe('personalClientSearch', () => {
  it('search should return status 200 and valid response', async () => {
    const res = await sdk.personalClientSearch.search({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.personalClientSearchServiceSearchResponse).toBe(true);
  });
});
