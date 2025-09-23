import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class RequestCatalogManagement extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Get a list of request catalogs.
     */
    list(request?: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse>;
    /**
     * Create
     *
     * @remarks
     * Creates a new request catalog.
     */
    create(request?: shared.RequestCatalogManagementServiceCreateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse>;
    /**
     * List All Entitlement Ids Per App
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ListAllEntitlementIdsPerApp method.
     */
    listAllEntitlementIdsPerApp(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse>;
    /**
     * List Entitlements Per Catalog
     *
     * @remarks
     * List entitlements in a catalog that are requestable.
     */
    listEntitlementsPerCatalog(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse>;
    /**
     * Update App Entitlements
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.UpdateAppEntitlements method.
     */
    updateAppEntitlements(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse>;
    /**
     * Remove App Entitlements
     *
     * @remarks
     * Remove requestable entitlements from a catalog.
     */
    removeAppEntitlements(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse>;
    /**
     * Add App Entitlements
     *
     * @remarks
     * Add requestable entitlements to a catalog.
     */
    addAppEntitlements(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse>;
    /**
     * Remove Access Entitlements
     *
     * @remarks
     * Remove visibility bindings (access entitlements) to a catalog.
     */
    removeAccessEntitlements(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse>;
    /**
     * Add Access Entitlements
     *
     * @remarks
     * Add visibility bindings (access entitlements) to a catalog.
     */
    addAccessEntitlements(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse>;
    /**
     * List Entitlements For Access
     *
     * @remarks
     * List visibility bindings (access entitlements) for a catalog.
     */
    listEntitlementsForAccess(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse>;
    /**
     * Delete
     *
     * @remarks
     * Delete a catalog.
     */
    delete(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a catalog.
     */
    get(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update a catalog.
     */
    update(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse>;
    /**
     * Delete Bundle Automation
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.DeleteBundleAutomation method.
     */
    deleteBundleAutomation(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse>;
    /**
     * Get Bundle Automation
     *
     * @remarks
     * Get bundle automation
     */
    getBundleAutomation(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse>;
    /**
     * Set Bundle Automation
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.SetBundleAutomation method.
     */
    setBundleAutomation(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse>;
    /**
     * Create Bundle Automation
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.CreateBundleAutomation method.
     */
    createBundleAutomation(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateBundleAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateBundleAutomationResponse>;
    /**
     * Resume Paused Bundle Automation
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ResumePausedBundleAutomation method.
     */
    resumePausedBundleAutomation(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse>;
    /**
     * Force Run Bundle Automation
     *
     * @remarks
     * Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ForceRunBundleAutomation method.
     */
    forceRunBundleAutomation(request: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest, options?: RequestOptions): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse>;
}
