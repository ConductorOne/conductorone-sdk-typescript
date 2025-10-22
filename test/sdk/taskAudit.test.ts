import { sdk } from '../setup';

describe('taskAudit', () => {
  // skip this test because needs to be fixed.
  it.skip('list should return status 200 and valid response', async () => {
    const res = await sdk.taskAudit.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.taskAuditListResponse).toBe(true);
  });
});
