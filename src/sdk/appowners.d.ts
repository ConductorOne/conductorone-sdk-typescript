import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppOwners extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List owners of an app.
     */
    list(request: operations.C1ApiAppV1AppOwnersListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppOwnersListResponse>;
    /**
     * Set
     *
     * @remarks
     * Sets the owners for a given app to the specified list of users.
     */
    set(request: operations.C1ApiAppV1AppOwnersSetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppOwnersSetResponse>;
    /**
     * Remove
     *
     * @remarks
     * Removes an owner from an app.
     */
    remove(request: operations.C1ApiAppV1AppOwnersRemoveRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppOwnersRemoveResponse>;
    /**
     * Add
     *
     * @remarks
     * Adds an owner to an app.
     */
    add(request: operations.C1ApiAppV1AppOwnersAddRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppOwnersAddResponse>;
}
