import { sdk, authHeaders } from '../setup';

describe('attributes', () => {
  it('listAttributeTypes should return status 200 and valid response', async () => {
    const res = await sdk.attributes.listAttributeTypes({}, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.listAttributeTypesResponse).toBe(true);
  });
});
