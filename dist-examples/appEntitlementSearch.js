import { getClient, authHeader } from './common.js';
async function main() {
    const sdk = getClient();
    const headers = { headers: await authHeader(sdk) };
    const res = await sdk.appEntitlementSearch.search({
        appIds: [process.env.CONE_EXAMPLE_APP_ID || ''],
    }, headers);
    console.log('Search status:', res.statusCode);
    console.log('Items:', res.appEntitlementSearchServiceSearchResponse?.list?.length ?? 0);
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
