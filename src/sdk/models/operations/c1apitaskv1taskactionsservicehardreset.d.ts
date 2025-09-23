import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceHardResetRequest = {
    taskId: string | null;
    taskActionsServiceHardResetRequest?: shared.TaskActionsServiceHardResetRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceHardResetResponse = {
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
     * Successful response
     */
    taskActionsServiceHardResetResponse?: shared.TaskActionsServiceHardResetResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceHardResetRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceHardResetRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceHardResetRequest?: shared.TaskActionsServiceHardResetRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceHardResetRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceHardResetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceHardResetRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceHardResetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceHardResetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceHardResetRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceHardResetRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceHardResetRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceHardResetRequestToJSON(c1ApiTaskV1TaskActionsServiceHardResetRequest: C1ApiTaskV1TaskActionsServiceHardResetRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceHardResetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceHardResetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceHardResetResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceHardResetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceHardResetResponse?: shared.TaskActionsServiceHardResetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceHardResetResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceHardResetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceHardResetResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceHardResetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceHardResetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceHardResetResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceHardResetResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceHardResetResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceHardResetResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceHardResetResponseToJSON(c1ApiTaskV1TaskActionsServiceHardResetResponse: C1ApiTaskV1TaskActionsServiceHardResetResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceHardResetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceHardResetResponse, SDKValidationError>;
