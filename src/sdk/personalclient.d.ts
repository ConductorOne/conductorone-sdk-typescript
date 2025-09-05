import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class PersonalClient extends ClientSDK {
    /**
     * NOTE: Only shows personal clients for the current user.
     *
     * @remarks
     * Invokes the c1.api.iam.v1.PersonalClientService.List method.
     */
    list(options?: RequestOptions): Promise<operations.C1ApiIamV1PersonalClientServiceListResponse>;
    /**
     * Create
     *
     * @remarks
     * Create creates a new PersonalClient object for the current User.
     */
    create(request?: shared.PersonalClientServiceCreateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiIamV1PersonalClientServiceCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Invokes the c1.api.iam.v1.PersonalClientService.Delete method.
     */
    delete(request: operations.C1ApiIamV1PersonalClientServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiIamV1PersonalClientServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.iam.v1.PersonalClientService.Get method.
     */
    get(request: operations.C1ApiIamV1PersonalClientServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiIamV1PersonalClientServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Invokes the c1.api.iam.v1.PersonalClientService.Update method.
     */
    update(request: operations.C1ApiIamV1PersonalClientServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiIamV1PersonalClientServiceUpdateResponse>;
}
