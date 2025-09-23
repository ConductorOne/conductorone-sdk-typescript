import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Automation extends ClientSDK {
    /**
     * List Automations
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationService.ListAutomations method.
     */
    listAutomations(options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationServiceListAutomationsResponse>;
    /**
     * Create Automation
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationService.CreateAutomation method.
     */
    createAutomation(request?: shared.CreateAutomationRequestInput | undefined, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationServiceCreateAutomationResponse>;
    /**
     * Delete Automation
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationService.DeleteAutomation method.
     */
    deleteAutomation(request: operations.C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse>;
    /**
     * Get Automation
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationService.GetAutomation method.
     */
    getAutomation(request: operations.C1ApiAutomationsV1AutomationServiceGetAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationServiceGetAutomationResponse>;
    /**
     * Update Automation
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationService.UpdateAutomation method.
     */
    updateAutomation(request: operations.C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse>;
    /**
     * Execute Automation
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationService.ExecuteAutomation method.
     */
    executeAutomation(request: operations.C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse>;
}
