import { sdk, authHeaders } from '../setup';

describe('apps', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.apps.list({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.listAppsResponse).toBe(true);
  });

  it('create and delete app', async () => {
    const create = await sdk.apps.create({ displayName: 'SDK Test App', description: 'Created by tests' }, {
      headers: await authHeaders()
    });
    expect(create.statusCode).toBe(200);
    const id = create.createAppResponse?.app?.id;
    if (id) {
      const del = await sdk.apps.delete({ id }, {
        headers: await authHeaders()
      });
      expect(del.statusCode).toBe(200);
    }
  });
});
