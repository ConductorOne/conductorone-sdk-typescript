import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppUsageControls extends ClientSDK {
    /**
     * Get
     *
     * @remarks
     * Get usage controls, as an AppUsageControls object which describes some peripheral configuration, for an app.
     */
    get(request: operations.C1ApiAppV1AppUsageControlsServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUsageControlsServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update usage controls for an app.
     */
    update(request: operations.C1ApiAppV1AppUsageControlsServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUsageControlsServiceUpdateResponse>;
}
