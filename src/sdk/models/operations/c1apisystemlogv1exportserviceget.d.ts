import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportServiceGetRequest = {
    exportId: string | null;
};
export type C1ApiSystemlogV1ExportServiceGetResponse = {
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
     * The ExportServiceGetResponse message contains the system log exporter object.
     */
    exportServiceGetResponse?: shared.ExportServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceGetRequest$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceGetRequest$Outbound = {
    export_id: string | null;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceGetRequest$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceGetRequest$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceGetRequest>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceGetRequest$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceGetRequestToJSON(c1ApiSystemlogV1ExportServiceGetRequest: C1ApiSystemlogV1ExportServiceGetRequest): string;
export declare function c1ApiSystemlogV1ExportServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceGetResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportServiceGetResponse?: shared.ExportServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceGetResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceGetResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceGetResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceGetResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceGetResponseToJSON(c1ApiSystemlogV1ExportServiceGetResponse: C1ApiSystemlogV1ExportServiceGetResponse): string;
export declare function c1ApiSystemlogV1ExportServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceGetResponse, SDKValidationError>;
