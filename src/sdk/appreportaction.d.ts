import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppReportAction extends ClientSDK {
    /**
     * Generate Report
     *
     * @remarks
     * Generate a report for the given app.
     */
    generateReport(request: operations.C1ApiAppV1AppReportActionServiceGenerateReportRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppReportActionServiceGenerateReportResponse>;
}
