import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class StepUpTransaction extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Search allows searching for step-up transactions with various filters
     */
    search(request?: shared.SearchStepUpTransactionsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpTransactionServiceSearchResponse>;
    /**
     * Get
     *
     * @remarks
     * Get retrieves a specific step-up transaction by ID
     */
    get(request: operations.C1ApiStepupV1StepUpTransactionServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpTransactionServiceGetResponse>;
}
