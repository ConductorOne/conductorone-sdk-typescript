import { sdk, authHeaders } from '../setup';

describe('policyValidate', () => {
  it('validateCEL should return status 200 and valid response', async () => {
    const res = await sdk.policyValidate.validateCEL({
      text: "test",
    }, {
      headers: await authHeaders()
    });
    expect(res.statusCode).toBe(200);
    expect(!!res.editorValidateResponse).toBe(true);
  });
});
