import { sdk, authHeaders } from '../setup';

describe('webhooks', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.webhooks.list({}, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.webhooksServiceListResponse).toBe(true);
  });
});
