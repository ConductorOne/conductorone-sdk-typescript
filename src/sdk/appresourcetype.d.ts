import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppResourceType extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List app resource types.
     */
    list(request: operations.C1ApiAppV1AppResourceTypeServiceListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceTypeServiceListResponse>;
    /**
     * Create Manually Managed Resource Type
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceTypeService.CreateManuallyManagedResourceType method.
     */
    createManuallyManagedResourceType(request: operations.C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse>;
    /**
     * Delete Manually Managed Resource Type
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceTypeService.DeleteManuallyManagedResourceType method.
     */
    deleteManuallyManagedResourceType(request: operations.C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse>;
    /**
     * Get
     *
     * @remarks
     * Get an app resource type.
     */
    get(request: operations.C1ApiAppV1AppResourceTypeServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceTypeServiceGetResponse>;
    /**
     * Update Manually Managed Resource Type
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceTypeService.UpdateManuallyManagedResourceType method.
     */
    updateManuallyManagedResourceType(request: operations.C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse>;
}
