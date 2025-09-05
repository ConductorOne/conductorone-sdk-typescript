import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportServiceListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiSystemlogV1ExportServiceListResponse = {
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
    exportServiceListResponse?: shared.ExportServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListRequest$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListRequest$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceListRequest$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListRequest>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceListRequest$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceListRequestToJSON(c1ApiSystemlogV1ExportServiceListRequest: C1ApiSystemlogV1ExportServiceListRequest): string;
export declare function c1ApiSystemlogV1ExportServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportServiceListResponse?: shared.ExportServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceListResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceListResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceListResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceListResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceListResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceListResponseToJSON(c1ApiSystemlogV1ExportServiceListResponse: C1ApiSystemlogV1ExportServiceListResponse): string;
export declare function c1ApiSystemlogV1ExportServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceListResponse, SDKValidationError>;
