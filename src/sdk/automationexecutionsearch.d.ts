import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AutomationExecutionSearch extends ClientSDK {
    /**
     * Search Automation Executions
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationExecutionSearchService.SearchAutomationExecutions method.
     */
    searchAutomationExecutions(request?: shared.SearchAutomationExecutionsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse>;
}
