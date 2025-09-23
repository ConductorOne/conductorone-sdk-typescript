import { sdk } from '../setup';

describe('attributeSearch', () => {
  it('searchAttributeValues should return status 200 and valid response', async () => {
    const res = await sdk.attributeSearch.searchAttributeValues({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchAttributeValuesResponse).toBe(true);
  });
});
