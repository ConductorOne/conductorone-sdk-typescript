import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class SystemLog extends ClientSDK {
    /**
     * List Events
     *
     * @remarks
     * ListEvents pulls Events from the ConductorOne system.
     *
     *  This endpoint should be used to synchorize the
     *  system log events to external systems.
     */
    listEvents(request?: shared.SystemLogServiceListEventsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1SystemLogServiceListEventsResponse>;
}
