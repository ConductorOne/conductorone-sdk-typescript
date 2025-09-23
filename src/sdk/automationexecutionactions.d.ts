import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AutomationExecutionActions extends ClientSDK {
    /**
     * Terminate Automation
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationExecutionActionsService.TerminateAutomation method.
     */
    terminateAutomation(request: operations.C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse>;
}
