import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportServiceListEventsRequest = {
    exportId: string | null;
    exportServiceListEventsRequest?: shared.ExportServiceListEventsRequest | undefined;
};
export type C1ApiSystemlogV1ExportServiceListEventsResponse = {
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
    exportServiceListEventsResponse?: shared.ExportServiceListEventsResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListEventsRequest$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceListEventsRequest$Outbound = {
    export_id: string | null;
    ExportServiceListEventsRequest?: shared.ExportServiceListEventsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListEventsRequest$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListEventsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceListEventsRequest$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListEventsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListEventsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListEventsRequest>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListEventsRequest$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceListEventsRequest$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceListEventsRequestToJSON(c1ApiSystemlogV1ExportServiceListEventsRequest: C1ApiSystemlogV1ExportServiceListEventsRequest): string;
export declare function c1ApiSystemlogV1ExportServiceListEventsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceListEventsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListEventsResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceListEventsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportServiceListEventsResponse?: shared.ExportServiceListEventsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListEventsResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListEventsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceListEventsResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListEventsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListEventsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListEventsResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListEventsResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListEventsResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceListEventsResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceListEventsResponseToJSON(c1ApiSystemlogV1ExportServiceListEventsResponse: C1ApiSystemlogV1ExportServiceListEventsResponse): string;
export declare function c1ApiSystemlogV1ExportServiceListEventsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceListEventsResponse, SDKValidationError>;
