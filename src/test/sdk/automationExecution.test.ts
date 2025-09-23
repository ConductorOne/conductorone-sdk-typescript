import { sdk } from '../setup';

describe('automationExecution', () => {
  it('listAutomationExecutions should return status 200 and valid response', async () => {
    const res = await sdk.automationExecution.listAutomationExecutions();
    expect(res.statusCode).toBe(200);
    expect(!!res.listAutomationExecutionsResponse).toBe(true);
  });
});
