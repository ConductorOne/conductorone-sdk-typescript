import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class User extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List users.
     */
    list(request?: operations.C1ApiUserV1UserServiceListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiUserV1UserServiceListResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a user by ID.
     */
    get(request: operations.C1ApiUserV1UserServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiUserV1UserServiceGetResponse>;
}
