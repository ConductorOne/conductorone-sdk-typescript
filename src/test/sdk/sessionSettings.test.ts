import { sdk, authHeaders } from '../setup';

describe('sessionSettings', () => {
  it('get should return status 200 and valid response', async () => {
    const res = await sdk.sessionSettings.get({
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.getSessionSettingsResponse).toBe(true);
  });
});
