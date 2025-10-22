import { sdk } from '../setup';

describe('user', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.user.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.userServiceListResponse).toBe(true);
  });
});
