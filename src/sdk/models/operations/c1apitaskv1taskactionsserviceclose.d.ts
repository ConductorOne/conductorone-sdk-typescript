import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceCloseRequest = {
    taskId: string | null;
    taskActionsServiceCloseRequest?: shared.TaskActionsServiceCloseRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceCloseResponse = {
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
     * The TaskActionsServiceCloseResponse returns a task view with paths indicating the location of expanded items in the array.
     */
    taskActionsServiceCloseResponse?: shared.TaskActionsServiceCloseResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCloseRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceCloseRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceCloseRequest?: shared.TaskActionsServiceCloseRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCloseRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCloseRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceCloseRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCloseRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCloseRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCloseRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCloseRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceCloseRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceCloseRequestToJSON(c1ApiTaskV1TaskActionsServiceCloseRequest: C1ApiTaskV1TaskActionsServiceCloseRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceCloseRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceCloseRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCloseResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceCloseResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceCloseResponse?: shared.TaskActionsServiceCloseResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceCloseResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCloseResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceCloseResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCloseResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCloseResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceCloseResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceCloseResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceCloseResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceCloseResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceCloseResponseToJSON(c1ApiTaskV1TaskActionsServiceCloseResponse: C1ApiTaskV1TaskActionsServiceCloseResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceCloseResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceCloseResponse, SDKValidationError>;
