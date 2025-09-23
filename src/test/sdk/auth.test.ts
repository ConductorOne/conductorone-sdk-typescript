import { sdk } from '../setup';

describe('auth', () => {
  it('introspect should return status 200 and valid response', async () => {
    const res = await sdk.auth.introspect();
    expect(res.statusCode).toBe(200);
    expect(!!res.introspectResponse).toBe(true);
  });
});
