import { sdk } from '../setup';

describe('personalClient', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.personalClient.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.personalClientServiceListResponse).toBe(true);
  });
});
