import { sdk } from '../setup';

describe('appEntitlementOwners', () => {
  it('list should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    const entitlementId = process.env.CONE_APP_ENTITLEMENT_ID as string | undefined;

    if (!appId || !entitlementId) {
      console.log('skipping test because appId or entitlementId is not set');
    } else {
      const res = await sdk.appEntitlementOwners.list(
        { 
          appId,
          entitlementId
      });
      expect(res.statusCode).toBe(200);
      expect(!!res.listAppEntitlementOwnersResponse).toBe(true);
    }
  });
});
