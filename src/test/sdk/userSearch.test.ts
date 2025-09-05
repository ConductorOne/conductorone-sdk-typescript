import { sdk, authHeaders } from '../setup';

describe('userSearch', () => {
  it('search should return status 200 and valid response', async () => {
    const res = await sdk.userSearch.search({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchUsersResponse).toBe(true);
  });
});
