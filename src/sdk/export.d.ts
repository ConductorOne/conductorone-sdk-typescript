import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Export extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * List Exports.
     */
    list(request?: operations.C1ApiSystemlogV1ExportServiceListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportServiceListResponse>;
    /**
     * Create
     *
     * @remarks
     * Create a system log export.
     */
    create(request?: shared.ExportServiceCreateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportServiceCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Delete a policy by ID.
     */
    delete(request: operations.C1ApiSystemlogV1ExportServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a system log export by ID
     */
    get(request: operations.C1ApiSystemlogV1ExportServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Update a system log export by providing a policy object and an update mask.
     */
    update(request: operations.C1ApiSystemlogV1ExportServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportServiceUpdateResponse>;
    /**
     * List Events
     *
     * @remarks
     * Invokes the c1.api.systemlog.v1.ExportService.ListEvents method.
     */
    listEvents(request: operations.C1ApiSystemlogV1ExportServiceListEventsRequest, options?: RequestOptions): Promise<operations.C1ApiSystemlogV1ExportServiceListEventsResponse>;
}
