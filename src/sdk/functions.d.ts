import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Functions extends ClientSDK {
    /**
     * List Functions
     *
     * @remarks
     * List retrieves all functions with pagination
     */
    listFunctions(options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceListFunctionsResponse>;
    /**
     * Create Function
     *
     * @remarks
     * Invokes the c1.api.functions.v1.FunctionsService.CreateFunction method.
     */
    createFunction(request?: shared.FunctionsServiceCreateFunctionRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceCreateFunctionResponse>;
    /**
     * List Commits
     *
     * @remarks
     * ListCommits retrieves the commit history
     */
    listCommits(request: operations.C1ApiFunctionsV1FunctionsServiceListCommitsRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceListCommitsResponse>;
    /**
     * Commit
     *
     * @remarks
     * Commit saves a new version of the function code
     */
    commit(request: operations.C1ApiFunctionsV1FunctionsServiceCommitRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceCommitResponse>;
    /**
     * Get Commit
     *
     * @remarks
     * GetCommit retrieves the commit and its code content for a specific version
     */
    getCommit(request: operations.C1ApiFunctionsV1FunctionsServiceGetCommitRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceGetCommitResponse>;
    /**
     * Invoke
     *
     * @remarks
     * Invokes the c1.api.functions.v1.FunctionsService.Invoke method.
     */
    invoke(request: operations.C1ApiFunctionsV1FunctionsServiceInvokeRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceInvokeResponse>;
    /**
     * List Tags
     *
     * @remarks
     * ListTags lists all tags for a function
     */
    listTags(request: operations.C1ApiFunctionsV1FunctionsServiceListTagsRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceListTagsResponse>;
    /**
     * Create Tag
     *
     * @remarks
     * CreateTag creates a named reference to a specific commit
     */
    createTag(request: operations.C1ApiFunctionsV1FunctionsServiceCreateTagRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceCreateTagResponse>;
    /**
     * Delete Function
     *
     * @remarks
     * Delete removes a function
     */
    deleteFunction(request: operations.C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse>;
    /**
     * Get Function
     *
     * @remarks
     * Get retrieves a specific function by ID
     */
    getFunction(request: operations.C1ApiFunctionsV1FunctionsServiceGetFunctionRequest, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceGetFunctionResponse>;
    /**
     * Update Function
     *
     * @remarks
     * Update updates an existing function's metadata
     */
    updateFunction(request?: shared.FunctionsServiceUpdateFunctionRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse>;
}
