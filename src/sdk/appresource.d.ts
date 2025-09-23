import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppResource extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceService.List method.
     */
    list(request: operations.C1ApiAppV1AppResourceServiceListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceServiceListResponse>;
    /**
     * Create Manually Managed App Resource
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceService.CreateManuallyManagedAppResource method.
     */
    createManuallyManagedAppResource(request: operations.C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse>;
    /**
     * Delete Manually Managed App Resource
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceService.DeleteManuallyManagedAppResource method.
     */
    deleteManuallyManagedAppResource(request: operations.C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse>;
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceService.Get method.
     */
    get(request: operations.C1ApiAppV1AppResourceServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceService.Update method.
     */
    update(request: operations.C1ApiAppV1AppResourceServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceServiceUpdateResponse>;
}
