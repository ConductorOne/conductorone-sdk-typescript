import { sdk, authHeaders } from '../setup';

describe('appResourceType', () => {
  it('list should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    if (!appId) {
      console.log('skipping test because appId is not set');
    } else {
      const res = await sdk.appResourceType.list({ appId }, {
        headers: await authHeaders()
      });
      expect(res.statusCode).toBe(200);
      expect(!!res.appResourceTypeServiceListResponse).toBe(true);
    }
  });
  //TODO: add tests for createManuallyManagedResourceType, deleteManuallyManagedResourceType, get, updateManuallyManagedResourceType
});
