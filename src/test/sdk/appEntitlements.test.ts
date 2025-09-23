import { sdk } from '../setup';

describe('appEntitlements', () => {
  it('list should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    if (!appId) {
      console.log('appId is not set');
      return;
    }
    const res = await sdk.appEntitlements.list({ appId, pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.listAppEntitlementsResponse).toBe(true);
  });
});
