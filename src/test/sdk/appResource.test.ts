import { sdk, authHeaders } from '../setup';

describe('appResource', () => {
  it('list should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    const appResourceTypeId = process.env.CONE_APP_RESOURCE_TYPE_ID as string | undefined;
    if (!appId || !appResourceTypeId) {
      console.log('appId or appResourceTypeId is not set');
      return;
    }
    const res = await sdk.appResource.list({ appId, appResourceTypeId, pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.appResourceServiceListResponse).toBe(true);
  });
});
