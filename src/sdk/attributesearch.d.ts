import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AttributeSearch extends ClientSDK {
    /**
     * Search Attribute Values
     *
     * @remarks
     * Search attributes based on filters specified in the request body.
     */
    searchAttributeValues(request?: shared.SearchAttributeValuesRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse>;
}
