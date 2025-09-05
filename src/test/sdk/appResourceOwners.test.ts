import { sdk, authHeaders } from '../setup';

describe('appResourceOwners', () => {
  it('list should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    const resourceTypeId = process.env.CONE_RESOURCE_TYPE_ID as string | undefined;
    const resourceId = process.env.CONE_RESOURCE_ID as string | undefined;
    if (!appId || !resourceTypeId || !resourceId) {
      console.log('skipping test because appId or resourceTypeId or resourceId is not set');
    } else {
      const res = await sdk.appResourceOwners.list({ appId, resourceTypeId, resourceId }, {
        headers: await authHeaders()
      });
      expect(res.statusCode).toBe(200);
      expect(!!res.listAppResourceOwnersResponse).toBe(true);
    }
  });
});
