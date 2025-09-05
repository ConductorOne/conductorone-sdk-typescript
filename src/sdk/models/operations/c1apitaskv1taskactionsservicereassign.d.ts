import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceReassignRequest = {
    taskId: string | null;
    taskActionsServiceReassignRequest?: shared.TaskActionsServiceReassignRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceReassignResponse = {
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
     * The TaskActionsServiceReassignResponse returns a task view with paths indicating the location of expanded items in the array.
     */
    taskActionsServiceReassignResponse?: shared.TaskActionsServiceReassignResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceReassignRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceReassignRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceReassignRequest?: shared.TaskActionsServiceReassignRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceReassignRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceReassignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceReassignRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceReassignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceReassignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceReassignRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceReassignRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceReassignRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceReassignRequestToJSON(c1ApiTaskV1TaskActionsServiceReassignRequest: C1ApiTaskV1TaskActionsServiceReassignRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceReassignRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceReassignRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceReassignResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceReassignResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceReassignResponse?: shared.TaskActionsServiceReassignResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceReassignResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceReassignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceReassignResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceReassignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceReassignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceReassignResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceReassignResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceReassignResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceReassignResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceReassignResponseToJSON(c1ApiTaskV1TaskActionsServiceReassignResponse: C1ApiTaskV1TaskActionsServiceReassignResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceReassignResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceReassignResponse, SDKValidationError>;
