import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AccountProvisionPolicyTest extends ClientSDK {
    /**
     * Test
     *
     * @remarks
     * Invokes the c1.api.policy.v1.AccountProvisionPolicyTest.Test method.
     */
    test(request?: shared.TestAccountProvisionPolicyRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiPolicyV1AccountProvisionPolicyTestTestResponse>;
}
