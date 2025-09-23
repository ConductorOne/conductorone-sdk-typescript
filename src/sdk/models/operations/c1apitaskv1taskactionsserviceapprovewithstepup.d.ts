import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest = {
    taskId: string;
    taskActionsServiceApproveWithStepUpRequest?: shared.TaskActionsServiceApproveWithStepUpRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * TaskActionsServiceApproveWithStepUpResponse is the response for approving a task with step-up authentication
     */
    taskActionsServiceApproveWithStepUpResponse?: shared.TaskActionsServiceApproveWithStepUpResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$Outbound = {
    task_id: string;
    TaskActionsServiceApproveWithStepUpRequest?: shared.TaskActionsServiceApproveWithStepUpRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceApproveWithStepUpRequestToJSON(c1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest: C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceApproveWithStepUpRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceApproveWithStepUpResponse?: shared.TaskActionsServiceApproveWithStepUpResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceApproveWithStepUpResponseToJSON(c1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse: C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceApproveWithStepUpResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse, SDKValidationError>;
