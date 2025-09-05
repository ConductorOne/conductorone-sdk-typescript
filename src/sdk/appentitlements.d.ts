import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppEntitlements extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List app entitlements associated with an app.
     */
    list(request: operations.C1ApiAppV1AppEntitlementsListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsListResponse>;
    /**
     * Create
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.Create method.
     */
    create(request: operations.C1ApiAppV1AppEntitlementsCreateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsCreateResponse>;
    /**
     * Add Manually Managed Members
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.AddManuallyManagedMembers method.
     */
    addManuallyManagedMembers(request: operations.C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse>;
    /**
     * Delete Automation
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.DeleteAutomation method.
     */
    deleteAutomation(request: operations.C1ApiAppV1AppEntitlementsDeleteAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsDeleteAutomationResponse>;
    /**
     * Get Automation
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.GetAutomation method.
     */
    getAutomation(request: operations.C1ApiAppV1AppEntitlementsGetAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsGetAutomationResponse>;
    /**
     * Create Automation
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.CreateAutomation method.
     */
    createAutomation(request: operations.C1ApiAppV1AppEntitlementsCreateAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsCreateAutomationResponse>;
    /**
     * Remove Automation Exclusion
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.RemoveAutomationExclusion method.
     */
    removeAutomationExclusion(request: operations.C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse>;
    /**
     * List Automation Exclusions
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.ListAutomationExclusions method.
     */
    listAutomationExclusions(request: operations.C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse>;
    /**
     * Add Automation Exclusion
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.AddAutomationExclusion method.
     */
    addAutomationExclusion(request: operations.C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse>;
    /**
     * Update Automation
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.UpdateAutomation method.
     */
    updateAutomation(request: operations.C1ApiAppV1AppEntitlementsUpdateAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsUpdateAutomationResponse>;
    /**
     * Remove Entitlement Membership
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.RemoveEntitlementMembership method.
     */
    removeEntitlementMembership(request: operations.C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse>;
    /**
     * List Users
     *
     * @remarks
     * List the users, as AppEntitlementUsers objects, of an app entitlement.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    listUsers(request: operations.C1ApiAppV1AppEntitlementsListUsersRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsListUsersResponse>;
    /**
     * Delete
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlements.Delete method.
     */
    delete(request: operations.C1ApiAppV1AppEntitlementsDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get an app entitlement by ID.
     */
    get(request: operations.C1ApiAppV1AppEntitlementsGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update an app entitlement by ID.
     */
    update(request: operations.C1ApiAppV1AppEntitlementsUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsUpdateResponse>;
    /**
     * List For App Resource
     *
     * @remarks
     * List app entitlements associated with an app resource.
     */
    listForAppResource(request: operations.C1ApiAppV1AppEntitlementsListForAppResourceRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsListForAppResourceResponse>;
    /**
     * List For App User
     *
     * @remarks
     * List app entitlements associated with an app user.
     */
    listForAppUser(request: operations.C1ApiAppV1AppEntitlementsListForAppUserRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsListForAppUserResponse>;
}
