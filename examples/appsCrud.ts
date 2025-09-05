import { getClient, authHeader } from './common.js';

async function main() {
  const sdk = getClient();
  const headers = { headers: await authHeader(sdk) };

  // Create
  const create = await sdk.apps.create({
    displayName: 'SDK Example App',
    description: 'Created via examples/appsCrud.ts',
  }, headers);
  console.log('Create status:', create.statusCode);
  const appId = create.createAppResponse?.app?.id;
  if (!appId) throw new Error('No app id created');

  // Update
  const update = await sdk.apps.update({ id: appId }, headers);
  console.log('Update status:', update.statusCode);

  // Delete
  const del = await sdk.apps.delete({ id: appId }, headers);
  console.log('Delete status:', del.statusCode);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


