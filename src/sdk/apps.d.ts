import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Apps extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List all apps.
     */
    list(request?: operations.C1ApiAppV1AppsListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1AppsListResponse>;
    /**
     * Create
     *
     * @remarks
     * Create a new manual app without a connector.
     */
    create(request?: shared.CreateAppRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1AppsCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Delete an app.
     */
    delete(request: operations.C1ApiAppV1AppsDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppsDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get an app by ID.
     */
    get(request: operations.C1ApiAppV1AppsGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppsGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update an existing app.
     */
    update(request: operations.C1ApiAppV1AppsUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppsUpdateResponse>;
}
