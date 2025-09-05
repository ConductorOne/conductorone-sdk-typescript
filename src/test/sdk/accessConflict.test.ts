import { sdk, authHeaders } from '../setup';

describe('accessConflict', () => {
  it('createMonitor should return status 200 and valid response', async () => {
    const createRes = await sdk.accessConflict.createMonitor({
      displayName: 'Test Monitor',
      description: 'Test Monitor Description'
    }, {
      headers: await authHeaders()
    });
    expect(createRes.statusCode).toBe(200);
    expect(!!createRes.conflictMonitor).toBe(true);
  
    const monitorId = createRes.conflictMonitor?.id;
    if (monitorId) {
      const getRes = await sdk.accessConflict.getMonitor({
        id: monitorId
      }, {
        headers: await authHeaders()
      });
      expect(getRes.statusCode).toBe(200);
      expect(!!getRes.conflictMonitor).toBe(true);

      const deleteRes = await sdk.accessConflict.deleteMonitor({
        id: monitorId
      }, {
        headers: await authHeaders()
      });
      expect(deleteRes.statusCode).toBe(200);
      expect(!!deleteRes.conflictMonitorDeleteResponse).toBe(true);
    }
  });
});
