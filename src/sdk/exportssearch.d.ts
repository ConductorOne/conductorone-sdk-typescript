import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class ExportsSearch extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Invokes the c1.api.systemlog.v1.ExportsSearchService.Search method.
     */
    search(request?: shared.ExportsSearchServiceSearchRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportsSearchServiceSearchResponse>;
}
