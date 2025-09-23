import { sdk } from '../setup';

describe('roles', () => {
  it('list should return status 200 and valid response', async () => {
    const res = await sdk.roles.list();
    expect(res.statusCode).toBe(200);
    expect(!!res.listRolesResponse).toBe(true);
  });
});
