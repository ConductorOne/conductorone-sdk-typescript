import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Directory extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List directories.
     */
    list(request?: operations.C1ApiDirectoryV1DirectoryServiceListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiDirectoryV1DirectoryServiceListResponse>;
    /**
     * Create
     *
     * @remarks
     * Create a directory.
     */
    create(request?: shared.DirectoryServiceCreateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiDirectoryV1DirectoryServiceCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Delete a directory by app_id.
     */
    delete(request: operations.C1ApiDirectoryV1DirectoryServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiDirectoryV1DirectoryServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a directory by app_id.
     */
    get(request: operations.C1ApiDirectoryV1DirectoryServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiDirectoryV1DirectoryServiceGetResponse>;
}
