import { sdk, authHeaders } from '../setup';

describe('taskAudit', () => {
  // skip this test because needs to be fixed.
  it.skip('list should return status 200 and valid response', async () => {
    const res = await sdk.taskAudit.list({}, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.taskAuditListResponse).toBe(true);
  });
});
