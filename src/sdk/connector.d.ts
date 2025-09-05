import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Connector extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List connectors for an app.
     */
    list(request: operations.C1ApiAppV1ConnectorServiceListRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceListResponse>;
    /**
     * Create Delegated
     *
     * @remarks
     * Create a connector that is pending a connector config.
     */
    createDelegated(request: operations.C1ApiAppV1ConnectorServiceCreateDelegatedRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceCreateDelegatedResponse>;
    /**
     * Get Credentials
     *
     * @remarks
     * Get credentials for a connector.
     */
    getCredentials(request: operations.C1ApiAppV1ConnectorServiceGetCredentialsRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceGetCredentialsResponse>;
    /**
     * Revoke Credential
     *
     * @remarks
     * Revoke credentials for a connector.
     */
    revokeCredential(request: operations.C1ApiAppV1ConnectorServiceRevokeCredentialRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceRevokeCredentialResponse>;
    /**
     * Force Sync
     *
     * @remarks
     * Invokes the c1.api.app.v1.ConnectorService.ForceSync method.
     */
    forceSync(request: operations.C1ApiAppV1ConnectorServiceForceSyncRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceForceSyncResponse>;
    /**
     * Pause Sync
     *
     * @remarks
     * Invokes the c1.api.app.v1.ConnectorService.PauseSync method.
     */
    pauseSync(request: operations.C1ApiAppV1ConnectorServicePauseSyncRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServicePauseSyncResponse>;
    /**
     * Resume Sync
     *
     * @remarks
     * Invokes the c1.api.app.v1.ConnectorService.ResumeSync method.
     */
    resumeSync(request: operations.C1ApiAppV1ConnectorServiceResumeSyncRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceResumeSyncResponse>;
    /**
     * Delete
     *
     * @remarks
     * Delete a connector.
     */
    delete(request: operations.C1ApiAppV1ConnectorServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a connector.
     */
    get(request: operations.C1ApiAppV1ConnectorServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update a connector.
     */
    update(request: operations.C1ApiAppV1ConnectorServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceUpdateResponse>;
    /**
     * Create
     *
     * @remarks
     * Create a configured connector.
     */
    create(request: operations.C1ApiAppV1ConnectorServiceCreateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceCreateResponse>;
    /**
     * Update Delegated
     *
     * @remarks
     * Update a delegated connector.
     */
    updateDelegated(request: operations.C1ApiAppV1ConnectorServiceUpdateDelegatedRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceUpdateDelegatedResponse>;
    /**
     * Rotate Credential
     *
     * @remarks
     * Rotate credentials for a connector.
     */
    rotateCredential(request?: shared.ConnectorServiceRotateCredentialRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceRotateCredentialResponse>;
    /**
     * Validate Http Connector Config
     *
     * @remarks
     * Invokes the c1.api.app.v1.ConnectorService.ValidateHTTPConnectorConfig method.
     */
    validateHTTPConnectorConfig(request?: shared.EditorValidateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse>;
}
