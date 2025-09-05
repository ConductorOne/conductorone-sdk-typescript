import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskServiceGetRequest = {
    id: string | null;
};
export type C1ApiTaskV1TaskServiceGetResponse = {
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
     * The TaskServiceGetResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
     */
    taskServiceGetResponse?: shared.TaskServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceGetRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceGetRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskServiceGetRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceGetRequest>;
    /** @deprecated use `C1ApiTaskV1TaskServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskServiceGetRequest$Outbound;
}
export declare function c1ApiTaskV1TaskServiceGetRequestToJSON(c1ApiTaskV1TaskServiceGetRequest: C1ApiTaskV1TaskServiceGetRequest): string;
export declare function c1ApiTaskV1TaskServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskServiceGetResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceGetResponse?: shared.TaskServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceGetResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskServiceGetResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceGetResponse>;
    /** @deprecated use `C1ApiTaskV1TaskServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskServiceGetResponse$Outbound;
}
export declare function c1ApiTaskV1TaskServiceGetResponseToJSON(c1ApiTaskV1TaskServiceGetResponse: C1ApiTaskV1TaskServiceGetResponse): string;
export declare function c1ApiTaskV1TaskServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskServiceGetResponse, SDKValidationError>;
