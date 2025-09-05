import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class RequestCatalogSearch extends ClientSDK {
    /**
     * Search Entitlements
     *
     * @remarks
     * Search request catalogs based on filters specified in the request body.
     */
    searchEntitlements(request?: shared.RequestCatalogSearchServiceSearchEntitlementsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse>;
}
