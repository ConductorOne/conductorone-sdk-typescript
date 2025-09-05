import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AppEntitlementUserBinding extends ClientSDK {
    /**
     * Remove Grant Duration
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementUserBindingService.RemoveGrantDuration method.
     */
    removeGrantDuration(request: operations.C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse>;
    /**
     * Update Grant Duration
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementUserBindingService.UpdateGrantDuration method.
     */
    updateGrantDuration(request: operations.C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse>;
    /**
     * List App Users For Identity With Grant
     *
     * @remarks
     * Returns a list of app users for the identity in the app. If that app user also has a grant to the entitlement from the request, data about the grant is also returned. It will always return ALL app users for this identity, but only SOME may have grant data.
     */
    listAppUsersForIdentityWithGrant(request: operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse>;
    /**
     * Search Grant Feed
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementUserBindingService.SearchGrantFeed method.
     */
    searchGrantFeed(request?: shared.SearchGrantFeedRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse>;
    /**
     * Search Past Grants
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementUserBindingService.SearchPastGrants method.
     */
    searchPastGrants(request?: shared.SearchPastGrantsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse>;
}
