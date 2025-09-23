import { sdk } from '../setup';

describe('taskActions', () => {
  // TODO: Add test for approve, approveWithStepUp, close, comment, deny, escalateToEmergencyAccess, processNow, reassign, hardReset, restart, skipStep, updateRequestData
  it.skip('approve should return status 200 and valid response', async () => {
    const res = await sdk.taskActions.approve({ taskId: "1" });
    expect(res.statusCode).toBe(200);
    expect(!!res.taskActionsServiceApproveResponse).toBe(true);
  });
});
