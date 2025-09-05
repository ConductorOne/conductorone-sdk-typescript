import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class PolicyValidate extends ClientSDK {
    /**
     * Validate Cel
     *
     * @remarks
     * Validate policies
     */
    validateCEL(request?: shared.EditorValidateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiPolicyV1PolicyValidateValidateCELResponse>;
}
