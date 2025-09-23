import { sdk } from '../setup';

describe('accountProvisionPolicyTest', () => {
  it.skip('test should return status 200 and valid response', async () => {
    const res = await sdk.accountProvisionPolicyTest.test({
      cel: 'true'
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.testAccountProvisionPolicyResponse).toBe(true);
  });
});
