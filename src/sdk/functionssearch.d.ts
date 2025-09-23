import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class FunctionsSearch extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Search searches for functions based on criteria
     */
    search(request?: shared.FunctionsSearchRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsSearchSearchResponse>;
}
