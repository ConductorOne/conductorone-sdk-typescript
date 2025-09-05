import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class TaskSearch extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Search tasks based on filters specified in the request body.
     */
    search(request?: shared.TaskSearchRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskSearchServiceSearchResponse>;
}
