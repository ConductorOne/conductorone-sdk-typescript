import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class WebhooksSearch extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Invokes the c1.api.webhooks.v1.WebhooksSearch.Search method.
     */
    search(request?: shared.WebhooksSearchRequest | undefined, options?: RequestOptions): Promise<PageIterator<operations.C1ApiWebhooksV1WebhooksSearchSearchResponse, {
        cursor: string;
    }>>;
}
