import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Webhooks extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksService.List method.
     */
    list(request?: operations.C1ApiWebhooksV1WebhooksServiceListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiWebhooksV1WebhooksServiceListResponse>;
    /**
     * Create
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksService.Create method.
     */
    create(request?: shared.WebhooksServiceCreateRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiWebhooksV1WebhooksServiceCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksService.Delete method.
     */
    delete(request: operations.C1ApiWebhooksV1WebhooksServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiWebhooksV1WebhooksServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksService.Get method.
     */
    get(request: operations.C1ApiWebhooksV1WebhooksServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiWebhooksV1WebhooksServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksService.Update method.
     */
    update(request: operations.C1ApiWebhooksV1WebhooksServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiWebhooksV1WebhooksServiceUpdateResponse>;
    /**
     * Test
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksService.Test method.
     */
    test(request: operations.C1ApiWebhooksV1WebhooksServiceTestRequest, options?: RequestOptions): Promise<operations.C1ApiWebhooksV1WebhooksServiceTestResponse>;
}
