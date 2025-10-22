import { sdk } from '../setup';

describe('orgDomain', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.orgDomain.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.listOrgDomainsResponse).toBe(true);
  });
});
