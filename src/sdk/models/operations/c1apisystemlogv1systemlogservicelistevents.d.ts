import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1SystemLogServiceListEventsResponse = {
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
    systemLogServiceListEventsResponse?: shared.SystemLogServiceListEventsResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1SystemLogServiceListEventsResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1SystemLogServiceListEventsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1SystemLogServiceListEventsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SystemLogServiceListEventsResponse?: shared.SystemLogServiceListEventsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1SystemLogServiceListEventsResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1SystemLogServiceListEventsResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1SystemLogServiceListEventsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1SystemLogServiceListEventsResponse$ {
    /** @deprecated use `C1ApiSystemlogV1SystemLogServiceListEventsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1SystemLogServiceListEventsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1SystemLogServiceListEventsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1SystemLogServiceListEventsResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1SystemLogServiceListEventsResponse>;
    /** @deprecated use `C1ApiSystemlogV1SystemLogServiceListEventsResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1SystemLogServiceListEventsResponse$Outbound;
}
export declare function c1ApiSystemlogV1SystemLogServiceListEventsResponseToJSON(c1ApiSystemlogV1SystemLogServiceListEventsResponse: C1ApiSystemlogV1SystemLogServiceListEventsResponse): string;
export declare function c1ApiSystemlogV1SystemLogServiceListEventsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1SystemLogServiceListEventsResponse, SDKValidationError>;
