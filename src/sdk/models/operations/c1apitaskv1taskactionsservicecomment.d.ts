import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceCommentRequest = {
    taskId: string | null;
    taskActionsServiceCommentRequest?: shared.TaskActionsServiceCommentRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceCommentResponse = {
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
     * Task actions service comment response returns the task view inluding the expanded array of items that are indicated by the expand mask on the request.
     */
    taskActionsServiceCommentResponse?: shared.TaskActionsServiceCommentResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCommentRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceCommentRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceCommentRequest?: shared.TaskActionsServiceCommentRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCommentRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCommentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceCommentRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCommentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCommentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCommentRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCommentRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceCommentRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceCommentRequestToJSON(c1ApiTaskV1TaskActionsServiceCommentRequest: C1ApiTaskV1TaskActionsServiceCommentRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceCommentRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceCommentRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCommentResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceCommentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceCommentResponse?: shared.TaskActionsServiceCommentResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCommentResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCommentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceCommentResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCommentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCommentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCommentResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCommentResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCommentResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceCommentResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceCommentResponseToJSON(c1ApiTaskV1TaskActionsServiceCommentResponse: C1ApiTaskV1TaskActionsServiceCommentResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceCommentResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceCommentResponse, SDKValidationError>;
