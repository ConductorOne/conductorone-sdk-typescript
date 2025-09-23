import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppReportActionServiceGenerateReportRequest = {
    appId: string | null;
    appActionsServiceGenerateReportRequest?: shared.AppActionsServiceGenerateReportRequest | undefined;
};
export type C1ApiAppV1AppReportActionServiceGenerateReportResponse = {
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
     * Empty response body. Status code indicates success.
     */
    appActionsServiceGenerateReportResponse?: shared.AppActionsServiceGenerateReportResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppReportActionServiceGenerateReportRequest$inboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppReportActionServiceGenerateReportRequest$Outbound = {
    app_id: string | null;
    AppActionsServiceGenerateReportRequest?: shared.AppActionsServiceGenerateReportRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppReportActionServiceGenerateReportRequest$outboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportActionServiceGenerateReportRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppReportActionServiceGenerateReportRequest$ {
    /** @deprecated use `C1ApiAppV1AppReportActionServiceGenerateReportRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppReportActionServiceGenerateReportRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportActionServiceGenerateReportRequest>;
    /** @deprecated use `C1ApiAppV1AppReportActionServiceGenerateReportRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppReportActionServiceGenerateReportRequest$Outbound;
}
export declare function c1ApiAppV1AppReportActionServiceGenerateReportRequestToJSON(c1ApiAppV1AppReportActionServiceGenerateReportRequest: C1ApiAppV1AppReportActionServiceGenerateReportRequest): string;
export declare function c1ApiAppV1AppReportActionServiceGenerateReportRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppReportActionServiceGenerateReportRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppReportActionServiceGenerateReportResponse$inboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppReportActionServiceGenerateReportResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppActionsServiceGenerateReportResponse?: shared.AppActionsServiceGenerateReportResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppReportActionServiceGenerateReportResponse$outboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportActionServiceGenerateReportResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppReportActionServiceGenerateReportResponse$ {
    /** @deprecated use `C1ApiAppV1AppReportActionServiceGenerateReportResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppReportActionServiceGenerateReportResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppReportActionServiceGenerateReportResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppReportActionServiceGenerateReportResponse>;
    /** @deprecated use `C1ApiAppV1AppReportActionServiceGenerateReportResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppReportActionServiceGenerateReportResponse$Outbound;
}
export declare function c1ApiAppV1AppReportActionServiceGenerateReportResponseToJSON(c1ApiAppV1AppReportActionServiceGenerateReportResponse: C1ApiAppV1AppReportActionServiceGenerateReportResponse): string;
export declare function c1ApiAppV1AppReportActionServiceGenerateReportResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppReportActionServiceGenerateReportResponse, SDKValidationError>;
