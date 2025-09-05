import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class PersonalClientSearch extends ClientSDK {
    /**
     * NOTE: Searches personal clients for all users
     *
     * @remarks
     * Invokes the c1.api.iam.v1.PersonalClientSearchService.Search method.
     */
    search(request?: shared.PersonalClientSearchServiceSearchRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiIamV1PersonalClientSearchServiceSearchResponse>;
}
