import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceRestartRequest = {
    taskId: string | null;
    taskActionsServiceRestartRequest?: shared.TaskActionsServiceRestartRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceRestartResponse = {
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
    taskActionsServiceRestartResponse?: shared.TaskActionsServiceRestartResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceRestartRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceRestartRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceRestartRequest?: shared.TaskActionsServiceRestartRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceRestartRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceRestartRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceRestartRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceRestartRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceRestartRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceRestartRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceRestartRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceRestartRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceRestartRequestToJSON(c1ApiTaskV1TaskActionsServiceRestartRequest: C1ApiTaskV1TaskActionsServiceRestartRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceRestartRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceRestartRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceRestartResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceRestartResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceRestartResponse?: shared.TaskActionsServiceRestartResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceRestartResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceRestartResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceRestartResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceRestartResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceRestartResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceRestartResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceRestartResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceRestartResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceRestartResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceRestartResponseToJSON(c1ApiTaskV1TaskActionsServiceRestartResponse: C1ApiTaskV1TaskActionsServiceRestartResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceRestartResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceRestartResponse, SDKValidationError>;
