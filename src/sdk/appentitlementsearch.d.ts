import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AppEntitlementSearch extends ClientSDK {
    /**
     * Search App Entitlements With Expired
     *
     * @remarks
     * Search app entitlements, include app users, users, expires, discovered.
     */
    searchAppEntitlementsWithExpired(request: operations.C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse>;
    /**
     * Search App Entitlements For App User
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementSearchService.SearchAppEntitlementsForAppUser method.
     */
    searchAppEntitlementsForAppUser(request: operations.C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse>;
    /**
     * Search
     *
     * @remarks
     * Search app entitlements based on filters specified in the request body.
     */
    search(request?: shared.AppEntitlementSearchServiceSearchRequest | undefined, options?: RequestOptions): Promise<PageIterator<operations.C1ApiAppV1AppEntitlementSearchServiceSearchResponse, {
        cursor: string;
    }>>;
    /**
     * Search Grants
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementSearchService.SearchGrants method.
     */
    searchGrants(request?: shared.AppEntitlementSearchServiceSearchGrantsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse>;
}
