import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest = {
    taskId: string;
    taskActionsServiceUpdateRequestDataRequest?: shared.TaskActionsServiceUpdateRequestDataRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse = {
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
export declare const C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$Outbound = {
    task_id: string;
    TaskActionsServiceUpdateRequestDataRequest?: shared.TaskActionsServiceUpdateRequestDataRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceUpdateRequestDataRequestToJSON(c1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest: C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceUpdateRequestDataRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceActionResponse?: shared.TaskServiceActionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceUpdateRequestDataResponseToJSON(c1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse: C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceUpdateRequestDataResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse, SDKValidationError>;
