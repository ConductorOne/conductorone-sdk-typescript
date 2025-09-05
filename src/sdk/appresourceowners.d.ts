import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppResourceOwners extends ClientSDK {
    /**
     * Remove
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceOwners.Remove method.
     */
    remove(request: operations.C1ApiAppV1AppResourceOwnersRemoveRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceOwnersRemoveResponse>;
    /**
     * List
     *
     * @remarks
     * List all owners of an app resource.
     */
    list(request: operations.C1ApiAppV1AppResourceOwnersListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceOwnersListResponse>;
    /**
     * Add
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceOwners.Add method.
     */
    add(request: operations.C1ApiAppV1AppResourceOwnersAddRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceOwnersAddResponse>;
}
