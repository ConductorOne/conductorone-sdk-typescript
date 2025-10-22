import { sdk } from '../setup';

describe('stepUpTransaction', () => {
  // skip this test because it is returning a 403 status code. Needs to be fixed.
  it.skip('search should return status 200 and valid response', async () => {
    const res = await sdk.stepUpTransaction.search({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchStepUpTransactionsResponse).toBe(true);
  });
});
