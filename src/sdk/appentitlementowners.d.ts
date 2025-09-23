import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppEntitlementOwners extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List owners for a given app entitlement.
     */
    list(request: operations.C1ApiAppV1AppEntitlementOwnersListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementOwnersListResponse>;
    /**
     * Add
     *
     * @remarks
     * Add an owner to a given app entitlement.
     */
    add(request: operations.C1ApiAppV1AppEntitlementOwnersAddRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementOwnersAddResponse>;
    /**
     * Set
     *
     * @remarks
     * Sets the owners for a given app entitlement to the specified list of users.
     */
    set(request: operations.C1ApiAppV1AppEntitlementOwnersSetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementOwnersSetResponse>;
    /**
     * Remove
     *
     * @remarks
     * Remove an owner from a given app entitlement.
     */
    remove(request: operations.C1ApiAppV1AppEntitlementOwnersRemoveRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementOwnersRemoveResponse>;
}
