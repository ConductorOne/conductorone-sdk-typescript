import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AppSearch extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Search apps based on filters specified in the request body.
     */
    search(request?: shared.SearchAppsRequest | undefined, options?: RequestOptions): Promise<PageIterator<operations.C1ApiAppV1AppSearchSearchResponse, {
        cursor: string;
    }>>;
}
