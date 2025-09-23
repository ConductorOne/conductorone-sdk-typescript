import { sdk } from '../setup';

describe('requestCatalogManagement', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.requestCatalogManagement.list({ pageSize: 1 });
    expect(res.statusCode).toBe(200);
    expect(!!res.requestCatalogManagementServiceListResponse).toBe(true);
  });
});
