import { sdk, authHeaders } from '../setup';

describe('attributeSearch', () => {
  it('searchAttributeValues should return status 200 and valid response', async () => {
    const res = await sdk.attributeSearch.searchAttributeValues({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchAttributeValuesResponse).toBe(true);
  });
});
