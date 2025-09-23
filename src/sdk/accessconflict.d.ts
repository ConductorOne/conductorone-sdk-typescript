import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AccessConflict extends ClientSDK {
    /**
     * Create Monitor
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AccessConflictService.CreateMonitor method.
     */
    createMonitor(request?: shared.ConflictMonitorCreateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse>;
    /**
     * Delete Monitor
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AccessConflictService.DeleteMonitor method.
     */
    deleteMonitor(request: operations.C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse>;
    /**
     * Get Monitor
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AccessConflictService.GetMonitor method.
     */
    getMonitor(request: operations.C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse>;
    /**
     * Update Monitor
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AccessConflictService.UpdateMonitor method.
     */
    updateMonitor(request: operations.C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse>;
}
