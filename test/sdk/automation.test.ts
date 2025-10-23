import { sdk } from '../setup';

describe('automation', () => {
  it('listAutomations should return status 200 and valid response', async () => {
    const res = await sdk.automation.listAutomations();
    expect(res.statusCode).toBe(200);
    expect(!!res.listAutomationsResponse).toBe(true);
  });
});
