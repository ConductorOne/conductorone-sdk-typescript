import { sdk } from '../setup';

describe('automationSearch', () => {
  it('searchAutomations should return status 200 and valid response', async () => {
    const res = await sdk.automationSearch.searchAutomations({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.searchAutomationsResponse).toBe(true);
  });
});
