import { sdk } from '../setup';

describe('automationExecutionActions', () => {
  it('terminateAutomation should return status 200 and valid response', async () => {
    const id = process.env.CONE_AUTOMATION_EXECUTION_ID as number | undefined;
    if (!id) {
      console.log('skipping test because id is not set');
    } else {
      const res = await sdk.automationExecutionActions.terminateAutomation({ id });
      expect(res.statusCode).toBe(200);
      expect(!!res.terminateAutomationResponse).toBe(true);
    }
  });
});
