import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppReport extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Get a list of reports for the given app.
     */
    list(request: operations.C1ApiAppV1AppReportServiceListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppReportServiceListResponse>;
}
