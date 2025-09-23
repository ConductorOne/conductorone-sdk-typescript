import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class Roles extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List all roles for the current user.
     */
    list(request?: operations.C1ApiIamV1RolesListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiIamV1RolesListResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a role by id.
     */
    get(request: operations.C1ApiIamV1RolesGetRequest, options?: RequestOptions): Promise<operations.C1ApiIamV1RolesGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update a role by passing a Role object.
     */
    update(request: operations.C1ApiIamV1RolesUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiIamV1RolesUpdateResponse>;
}
