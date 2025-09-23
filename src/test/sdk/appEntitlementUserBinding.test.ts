import { sdk } from '../setup';

describe('appEntitlementUserBinding', () => {
  it('listAppUsersForIdentityWithGrant should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    const appEntitlementId = process.env.CONE_APP_ENTITLEMENT_ID as string | undefined;
    const identityUserId = process.env.CONE_IDENTITY_USER_ID as string | undefined;
    if (!appId || !appEntitlementId || !identityUserId) {
      console.log('skipping test because appId or entitlementId or identityUserId is not set');
    } else {
      const res = await sdk.appEntitlementUserBinding.listAppUsersForIdentityWithGrant({ appId, appEntitlementId, identityUserId });
      expect(res.statusCode).toBe(200);
      expect(!!res.listAppUsersForIdentityWithGrantResponse).toBe(true);
    }
  });
});
