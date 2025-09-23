import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class OrgDomain extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Invokes the c1.api.settings.v1.OrgDomainService.List method.
     */
    list(request?: operations.C1ApiSettingsV1OrgDomainServiceListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSettingsV1OrgDomainServiceListResponse>;
    /**
     * Update
     *
     * @remarks
     * Invokes the c1.api.settings.v1.OrgDomainService.Update method.
     */
    update(request?: shared.UpdateOrgDomainRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSettingsV1OrgDomainServiceUpdateResponse>;
}
