import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceDenyRequest = {
    taskId: string | null;
    taskActionsServiceDenyRequest?: shared.TaskActionsServiceDenyRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceDenyResponse = {
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
     * The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array.
     */
    taskActionsServiceDenyResponse?: shared.TaskActionsServiceDenyResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceDenyRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceDenyRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceDenyRequest?: shared.TaskActionsServiceDenyRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceDenyRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceDenyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceDenyRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceDenyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceDenyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceDenyRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceDenyRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceDenyRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceDenyRequestToJSON(c1ApiTaskV1TaskActionsServiceDenyRequest: C1ApiTaskV1TaskActionsServiceDenyRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceDenyRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceDenyRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceDenyResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceDenyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceDenyResponse?: shared.TaskActionsServiceDenyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceDenyResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceDenyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceDenyResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceDenyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceDenyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceDenyResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceDenyResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceDenyResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceDenyResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceDenyResponseToJSON(c1ApiTaskV1TaskActionsServiceDenyResponse: C1ApiTaskV1TaskActionsServiceDenyResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceDenyResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceDenyResponse, SDKValidationError>;
