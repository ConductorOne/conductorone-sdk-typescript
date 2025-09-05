import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskAuditListResponse = {
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
    taskAuditListResponse?: shared.TaskAuditListResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskAuditListResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskAuditListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskAuditListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskAuditListResponse?: shared.TaskAuditListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskAuditListResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskAuditListResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskAuditListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskAuditListResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskAuditListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskAuditListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskAuditListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskAuditListResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskAuditListResponse>;
    /** @deprecated use `C1ApiTaskV1TaskAuditListResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskAuditListResponse$Outbound;
}
export declare function c1ApiTaskV1TaskAuditListResponseToJSON(c1ApiTaskV1TaskAuditListResponse: C1ApiTaskV1TaskAuditListResponse): string;
export declare function c1ApiTaskV1TaskAuditListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskAuditListResponse, SDKValidationError>;
