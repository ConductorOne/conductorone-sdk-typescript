import { sdk } from '../setup';

describe('stepUpProvider', () => {
  // skip this test because it is returning a 403 status code. Needs to be fixed.
  it.skip('search should return status 200 and valid response', async () => {
    const res = await sdk.stepUpProvider.search({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchStepUpProvidersResponse).toBe(true);
  });
});
