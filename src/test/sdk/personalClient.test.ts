import { sdk, authHeaders } from '../setup';

describe('personalClient', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.personalClient.list({
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.personalClientServiceListResponse).toBe(true);
  });
});
