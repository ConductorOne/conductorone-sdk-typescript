import { getClient, authHeader } from './common.js';
async function main() {
    const sdk = getClient();
    const headers = { headers: await authHeader(sdk) };
    // Minimal sanity call: list apps
    const res = await sdk.apps.list({}, headers);
    console.log('Apps status:', res.statusCode);
    console.log('Apps count:', res.listAppsResponse?.list?.length ?? 0);
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
