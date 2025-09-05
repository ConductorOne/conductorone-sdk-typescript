import { sdk, authHeaders } from '../setup';

describe('policySearch', () => {
  it('search should return status 200 and valid response', async () => {
    const res = await sdk.policySearch.search({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchPoliciesResponse).toBe(true);
  });
});
