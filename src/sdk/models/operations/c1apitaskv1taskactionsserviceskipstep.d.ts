import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceSkipStepRequest = {
    taskId: string;
    taskActionsServiceSkipStepRequest?: shared.TaskActionsServiceSkipStepRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceSkipStepResponse = {
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
export declare const C1ApiTaskV1TaskActionsServiceSkipStepRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceSkipStepRequest$Outbound = {
    task_id: string;
    TaskActionsServiceSkipStepRequest?: shared.TaskActionsServiceSkipStepRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceSkipStepRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceSkipStepRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceSkipStepRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceSkipStepRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceSkipStepRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceSkipStepRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceSkipStepRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceSkipStepRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceSkipStepRequestToJSON(c1ApiTaskV1TaskActionsServiceSkipStepRequest: C1ApiTaskV1TaskActionsServiceSkipStepRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceSkipStepRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceSkipStepRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceSkipStepResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceSkipStepResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceActionResponse?: shared.TaskServiceActionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceSkipStepResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceSkipStepResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceSkipStepResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceSkipStepResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceSkipStepResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceSkipStepResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceSkipStepResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceSkipStepResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceSkipStepResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceSkipStepResponseToJSON(c1ApiTaskV1TaskActionsServiceSkipStepResponse: C1ApiTaskV1TaskActionsServiceSkipStepResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceSkipStepResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceSkipStepResponse, SDKValidationError>;
