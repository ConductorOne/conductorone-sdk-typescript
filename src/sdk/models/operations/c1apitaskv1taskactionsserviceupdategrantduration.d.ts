import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest = {
    taskId: string;
    taskActionsServiceUpdateGrantDurationRequest?: shared.TaskActionsServiceUpdateGrantDurationRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse = {
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
    taskServiceActionResponse?: shared.TaskServiceActionResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$Outbound = {
    task_id: string;
    TaskActionsServiceUpdateGrantDurationRequest?: shared.TaskActionsServiceUpdateGrantDurationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequestToJSON(c1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest: C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceActionResponse?: shared.TaskServiceActionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponseToJSON(c1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse: C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse, SDKValidationError>;
