import { sdk } from '../setup';

describe('directory', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.directory.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.directoryServiceListResponse).toBe(true);
  });
});
