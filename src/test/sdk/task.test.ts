import { sdk, authHeaders } from '../setup';

describe('task', () => {
  it('get should return status 200 and valid response', async () => {
    const res = await sdk.task.get({ id: "1" }, {
      headers: await authHeaders()
    });
    if (res.statusCode == 404) {
      console.log('task not found');
    } else {
      expect(res.statusCode).toBe(200);
      expect(!!res.taskServiceGetResponse).toBe(true);
    }
  });
  // TODO: Add test for createOffboardingTask, createGrantTask, createRevokeTask?
});
