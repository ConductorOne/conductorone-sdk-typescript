import { sdk } from '../setup';

describe('webhooksSearch', () => {
  it('search should return status 200 and valid response', async () => {
    const res = await sdk.webhooksSearch.search({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.webhooksSearchResponse).toBe(true);
  });
});
