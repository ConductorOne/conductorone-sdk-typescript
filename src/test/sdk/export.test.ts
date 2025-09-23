import { sdk } from '../setup';

describe('export', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.export.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.exportServiceListResponse).toBe(true);
  });
});
