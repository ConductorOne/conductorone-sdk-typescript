import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceProcessNowRequest = {
    taskId: string | null;
    taskActionsServiceProcessNowRequest?: shared.TaskActionsServiceProcessNowRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceProcessNowResponse = {
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
    taskActionsServiceProcessNowResponse?: shared.TaskActionsServiceProcessNowResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceProcessNowRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceProcessNowRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceProcessNowRequest?: shared.TaskActionsServiceProcessNowRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceProcessNowRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceProcessNowRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceProcessNowRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceProcessNowRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceProcessNowRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceProcessNowRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceProcessNowRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceProcessNowRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceProcessNowRequestToJSON(c1ApiTaskV1TaskActionsServiceProcessNowRequest: C1ApiTaskV1TaskActionsServiceProcessNowRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceProcessNowRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceProcessNowRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceProcessNowResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceProcessNowResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskActionsServiceProcessNowResponse?: shared.TaskActionsServiceProcessNowResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceProcessNowResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceProcessNowResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceProcessNowResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceProcessNowResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceProcessNowResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceProcessNowResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceProcessNowResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceProcessNowResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceProcessNowResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceProcessNowResponseToJSON(c1ApiTaskV1TaskActionsServiceProcessNowResponse: C1ApiTaskV1TaskActionsServiceProcessNowResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceProcessNowResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceProcessNowResponse, SDKValidationError>;
