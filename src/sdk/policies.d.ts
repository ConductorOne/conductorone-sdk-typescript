import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Policies extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List policies.
     */
    list(request?: operations.C1ApiPolicyV1PoliciesListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiPolicyV1PoliciesListResponse>;
    /**
     * Create
     *
     * @remarks
     * Create a policy.
     */
    create(request?: shared.CreatePolicyRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiPolicyV1PoliciesCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Delete a policy by ID.
     */
    delete(request: operations.C1ApiPolicyV1PoliciesDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiPolicyV1PoliciesDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a policy by ID.
     */
    get(request: operations.C1ApiPolicyV1PoliciesGetRequest, options?: RequestOptions): Promise<operations.C1ApiPolicyV1PoliciesGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update a policy by providing a policy object and an update mask.
     */
    update(request: operations.C1ApiPolicyV1PoliciesUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiPolicyV1PoliciesUpdateResponse>;
}
