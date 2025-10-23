import { sdk } from '../setup';

describe('systemLog', () => {
  it('listEvents should return status 200 and valid response', async () => {
    const res = await sdk.systemLog.listEvents({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.systemLogServiceListEventsResponse).toBe(true);
  });
});
