import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppAccessRequestsDefaults extends ClientSDK {
    /**
     * Get App Access Requests Defaults
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppAccessRequestsDefaultsService.GetAppAccessRequestsDefaults method.
     */
    getAppAccessRequestsDefaults(request: operations.C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse>;
    /**
     * Create App Access Requests Defaults
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppAccessRequestsDefaultsService.CreateAppAccessRequestsDefaults method.
     */
    createAppAccessRequestsDefaults(request: operations.C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse>;
    /**
     * Cancel App Access Requests Defaults
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppAccessRequestsDefaultsService.CancelAppAccessRequestsDefaults method.
     */
    cancelAppAccessRequestsDefaults(request: operations.C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse>;
}
