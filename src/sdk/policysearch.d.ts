import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class PolicySearch extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Search policies based on filters specified in the request body.
     */
    search(request?: shared.SearchPoliciesRequest | undefined, options?: RequestOptions): Promise<PageIterator<operations.C1ApiPolicyV1PolicySearchSearchResponse, {
        cursor: string;
    }>>;
}
