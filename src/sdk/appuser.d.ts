import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class AppUser extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppUserService.List method.
     */
    list(request: operations.C1ApiAppV1AppUserServiceListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUserServiceListResponse>;
    /**
     * List App User Credentials
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppUserService.ListAppUserCredentials method.
     */
    listAppUserCredentials(request: operations.C1ApiAppV1AppUserServiceListAppUserCredentialsRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUserServiceListAppUserCredentialsResponse>;
    /**
     * List App Users For User
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppUserService.ListAppUsersForUser method.
     */
    listAppUsersForUser(request: operations.C1ApiAppV1AppUserServiceListAppUsersForUserRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUserServiceListAppUsersForUserResponse>;
    /**
     * Update
     *
     * @remarks
     * Update an app user by ID. Only the fields specified in the update mask are updated.
     *  Currently, only the appUserType, and identityUserId fields can be updated.
     */
    update(request: operations.C1ApiAppV1AppUserServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUserServiceUpdateResponse>;
    /**
     * Search
     *
     * @remarks
     * Search app users based on filters specified in the request body.
     */
    search(request?: shared.AppUserServiceSearchRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1AppUserServiceSearchResponse>;
}
