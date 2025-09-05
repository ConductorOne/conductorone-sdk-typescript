import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppReportServiceListRequest = {
    appId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppReportServiceListResponse = {
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
     * The AppReportServiceListResponse message contains a list of results and a nextPageToken if applicable.
     */
    appReportServiceListResponse?: shared.AppReportServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppReportServiceListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppReportServiceListRequest$Outbound = {
    app_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppReportServiceListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppReportServiceListRequest$ {
    /** @deprecated use `C1ApiAppV1AppReportServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppReportServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportServiceListRequest>;
    /** @deprecated use `C1ApiAppV1AppReportServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppReportServiceListRequest$Outbound;
}
export declare function c1ApiAppV1AppReportServiceListRequestToJSON(c1ApiAppV1AppReportServiceListRequest: C1ApiAppV1AppReportServiceListRequest): string;
export declare function c1ApiAppV1AppReportServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppReportServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppReportServiceListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppReportServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppReportServiceListResponse?: shared.AppReportServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppReportServiceListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppReportServiceListResponse$ {
    /** @deprecated use `C1ApiAppV1AppReportServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppReportServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppReportServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportServiceListResponse>;
    /** @deprecated use `C1ApiAppV1AppReportServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppReportServiceListResponse$Outbound;
}
export declare function c1ApiAppV1AppReportServiceListResponseToJSON(c1ApiAppV1AppReportServiceListResponse: C1ApiAppV1AppReportServiceListResponse): string;
export declare function c1ApiAppV1AppReportServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppReportServiceListResponse, SDKValidationError>;
