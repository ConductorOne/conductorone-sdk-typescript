import { sdk } from '../setup';

describe('awsExternalIDSettings', () => {
  it('get should return status 200 and valid response', async () => {
    const res = await sdk.awsExternalIDSettings.get();
    expect(res.statusCode).toBe(200);
    expect(!!res.getAWSExternalIDResponse).toBe(true);
  });
});
