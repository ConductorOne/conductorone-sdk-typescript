import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class SessionSettings extends ClientSDK {
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.settings.v1.SessionSettingsService.Get method.
     */
    get(options?: RequestOptions): Promise<operations.C1ApiSettingsV1SessionSettingsServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Invokes the c1.api.settings.v1.SessionSettingsService.Update method.
     */
    update(request?: shared.UpdateSessionSettingsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSettingsV1SessionSettingsServiceUpdateResponse>;
    /**
     * Test Source Ip
     *
     * @remarks
     * Invokes the c1.api.settings.v1.SessionSettingsService.TestSourceIP method.
     */
    testSourceIP(request?: shared.TestSourceIPRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse>;
}
