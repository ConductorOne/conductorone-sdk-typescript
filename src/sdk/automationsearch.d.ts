import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AutomationSearch extends ClientSDK {
    /**
     * Search Automation Template Versions
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationSearchService.SearchAutomationTemplateVersions method.
     */
    searchAutomationTemplateVersions(request?: shared.SearchAutomationTemplateVersionsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse>;
    /**
     * Search Automations
     *
     * @remarks
     * Invokes the c1.api.automations.v1.AutomationSearchService.SearchAutomations method.
     */
    searchAutomations(request?: shared.SearchAutomationsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse>;
}
