import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AppEntitlementMonitorBinding extends ClientSDK {
    /**
     * Delete App Entitlement Monitor Binding
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AppEntitlementMonitorBindingService.DeleteAppEntitlementMonitorBinding method.
     */
    deleteAppEntitlementMonitorBinding(request?: shared.DeleteAppEntitlementMonitorBindingRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse>;
    /**
     * Create App Entitlement Monitor Binding
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AppEntitlementMonitorBindingService.CreateAppEntitlementMonitorBinding method.
     */
    createAppEntitlementMonitorBinding(request?: shared.CreateAppEntitlementMonitorBindingRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse>;
    /**
     * Get App Entitlement Monitor Binding
     *
     * @remarks
     * Invokes the c1.api.accessconflict.v1.AppEntitlementMonitorBindingService.GetAppEntitlementMonitorBinding method.
     */
    getAppEntitlementMonitorBinding(request?: shared.GetAppEntitlementMonitorBindingRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse>;
}
