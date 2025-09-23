import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AppResourceSearch extends ClientSDK {
    /**
     * Search App Resource Types
     *
     * @remarks
     * Search app resources based on filters specified in the request body.
     */
    searchAppResourceTypes(request?: shared.SearchAppResourceTypesRequest | undefined, options?: RequestOptions): Promise<PageIterator<operations.C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse, {
        cursor: string;
    }>>;
    /**
     * Search App Resources
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppResourceSearch.SearchAppResources method.
     */
    searchAppResources(request?: shared.SearchAppResourcesRequest | undefined, options?: RequestOptions): Promise<PageIterator<operations.C1ApiAppV1AppResourceSearchSearchAppResourcesResponse, {
        cursor: string;
    }>>;
}
