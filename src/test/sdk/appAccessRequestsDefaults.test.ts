import { sdk, authHeaders } from '../setup';

describe('appAccessRequestsDefaults', () => {
  it.skip('create, get, cancel should return status 200 and valid response', async () => {
    const appId = process.env.CONE_APP_ID as string | undefined;
    expect(!!appId).toBe(true);

    const create = await sdk.appAccessRequestsDefaults.createAppAccessRequestsDefaults({
      appId: appId as string,
      appAccessRequestDefaults: {
        defaultsEnabled: true,
        resourceTypeIds: [process.env.CONE_RESOURCE_TYPE_ID as string],
        requestPolicyId: process.env.CONE_REQUEST_POLICY_ID as string,
        catalogIds: [process.env.CONE_CATALOG_ID as string],
        durationUnset: {},
        emergencyGrantEnabled: false,
        emergencyGrantPolicyId: ''
      }
    }, {
      headers: await authHeaders()
    });
    expect(create.statusCode).toBe(200);
    expect(!!create.appAccessRequestDefaults).toBe(true);

    const get = await sdk.appAccessRequestsDefaults.getAppAccessRequestsDefaults({
      appId: appId!
    }, {
      headers: await authHeaders()
    });
    expect(get.statusCode).toBe(200);
    expect(!!get.appAccessRequestDefaults).toBe(true);

    const cancel = await sdk.appAccessRequestsDefaults.cancelAppAccessRequestsDefaults({
      appId: appId!,
      cancelAccessRequestDefaultsRequest: {}
    }, {
      headers: await authHeaders()
    });
    expect(cancel.statusCode).toBe(200);
    expect(!!cancel.appAccessRequestDefaults).toBe(true);
  });
});
