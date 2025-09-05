import { sdk, authHeaders } from '../setup';

describe('appEntitlementsProxy', () => {
  it('get should return status 200 and valid response', async () => {
    const srcAppId = process.env.CONE_SRC_APP_ID as string | undefined;
    const srcAppEntitlementId = process.env.CONE_SRC_APP_ENTITLEMENT_ID as string | undefined;
    const dstAppId = process.env.CONE_APP_ID as string | undefined;
    const dstAppEntitlementId = process.env.CONE_APP_ENTITLEMENT_ID as string | undefined;
    if (!srcAppId || !srcAppEntitlementId || !dstAppId || !dstAppEntitlementId) {
      console.log('skipping test because srcAppId or srcAppEntitlementId or dstAppId or dstAppEntitlementId is not set');
    } else {
      const res = await sdk.appEntitlementsProxy.get({ srcAppId, srcAppEntitlementId, dstAppId, dstAppEntitlementId }, {
        headers: await authHeaders()
      });
      expect(res.statusCode).toBe(200);
      expect(!!res.getAppEntitlementProxyResponse).toBe(true);
    }
  });
});
