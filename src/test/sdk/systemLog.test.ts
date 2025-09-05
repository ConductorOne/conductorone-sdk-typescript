import { sdk, authHeaders } from '../setup';

describe('systemLog', () => {
  it('listEvents should return status 200 and valid response', async () => {
    const res = await sdk.systemLog.listEvents({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.systemLogServiceListEventsResponse).toBe(true);
  });
});
