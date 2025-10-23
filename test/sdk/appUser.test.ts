import { sdk } from '../setup';

describe('appUser', () => {
  it('list should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    if (!appId) {
      console.log('skipping test because appId is not set');
    } else {
      const res = await sdk.appUser.list({ appId });
      expect(res.statusCode).toBe(200);
      expect(!!res.appUserServiceListResponse).toBe(true);
    }
  });
});
