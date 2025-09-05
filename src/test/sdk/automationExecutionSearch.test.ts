import { sdk, authHeaders } from '../setup';

describe('automationExecutionSearch', () => {
  it('searchAutomationExecutions should return status 200 and valid response', async () => {
    const res = await sdk.automationExecutionSearch.searchAutomationExecutions({ pageSize: 1 }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchAutomationExecutionsResponse).toBe(true);
  });
});
