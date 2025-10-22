import { sdk } from '../setup';

describe('policies', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.policies.list({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.listPolicyResponse).toBe(true);
  });
});
