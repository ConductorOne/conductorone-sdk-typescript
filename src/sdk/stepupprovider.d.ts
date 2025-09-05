import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class StepUpProvider extends ClientSDK {
    /**
     * Search
     *
     * @remarks
     * Search allows searching for step-up providers with various filters
     */
    search(request?: shared.SearchStepUpProvidersRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceSearchResponse>;
    /**
     * List
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.List method.
     */
    list(options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceListResponse>;
    /**
     * Create
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.Create method.
     */
    create(request?: shared.CreateStepUpProviderRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceCreateResponse>;
    /**
     * Delete
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.Delete method.
     */
    delete(request: operations.C1ApiStepupV1StepUpProviderServiceDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.Get method.
     */
    get(request: operations.C1ApiStepupV1StepUpProviderServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceGetResponse>;
    /**
     * Update
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.Update method.
     */
    update(request: operations.C1ApiStepupV1StepUpProviderServiceUpdateRequest, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceUpdateResponse>;
    /**
     * Update Secret
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.UpdateSecret method.
     */
    updateSecret(request: operations.C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse>;
    /**
     * Test
     *
     * @remarks
     * Invokes the c1.api.stepup.v1.StepUpProviderService.Test method.
     */
    test(request: operations.C1ApiStepupV1StepUpProviderServiceTestRequest, options?: RequestOptions): Promise<operations.C1ApiStepupV1StepUpProviderServiceTestResponse>;
}
