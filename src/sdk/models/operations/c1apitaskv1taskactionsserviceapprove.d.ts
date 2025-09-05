import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceApproveRequest = {
    taskId: string;
    taskActionsServiceApproveRequest?: shared.TaskActionsServiceApproveRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceApproveResponse = {
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
     * The TaskActionsServiceApproveResponse returns a task view with paths indicating the location of expanded items in the array.
     */
    taskActionsServiceApproveResponse?: shared.TaskActionsServiceApproveResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceApproveRequest$Outbound = {
    task_id: string;
    TaskActionsServiceApproveRequest?: shared.TaskActionsServiceApproveRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceApproveRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceApproveRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceApproveRequestToJSON(c1ApiTaskV1TaskActionsServiceApproveRequest: C1ApiTaskV1TaskActionsServiceApproveRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceApproveRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceApproveRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceApproveResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceApproveResponse?: shared.TaskActionsServiceApproveResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceApproveResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceApproveResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceApproveResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceApproveResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceApproveResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceApproveResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceApproveResponseToJSON(c1ApiTaskV1TaskActionsServiceApproveResponse: C1ApiTaskV1TaskActionsServiceApproveResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceApproveResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceApproveResponse, SDKValidationError>;
