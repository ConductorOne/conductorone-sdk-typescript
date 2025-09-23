import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AWSExternalIDSettings extends ClientSDK {
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.settings.v1.AWSExternalIDSettings.Get method.
     */
    get(options?: RequestOptions): Promise<operations.C1ApiSettingsV1AWSExternalIDSettingsGetResponse>;
}
