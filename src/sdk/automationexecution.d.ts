import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AutomationExecution extends ClientSDK {
    /**
     * List Automation Executions
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationExecutionService.ListAutomationExecutions method.
     */
    listAutomationExecutions(options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse>;
    /**
     * Get Automation Execution
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationExecutionService.GetAutomationExecution method.
     */
    getAutomationExecution(request: operations.C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse>;
}
