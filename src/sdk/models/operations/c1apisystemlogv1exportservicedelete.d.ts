import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportServiceDeleteRequest = {
    exportId: string | null;
    exportServiceDeleteRequest?: shared.ExportServiceDeleteRequest | undefined;
};
export type C1ApiSystemlogV1ExportServiceDeleteResponse = {
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
    exportServiceDeleteResponse?: shared.ExportServiceDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceDeleteRequest$Outbound = {
    export_id: string | null;
    ExportServiceDeleteRequest?: shared.ExportServiceDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceDeleteRequest$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceDeleteRequest>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceDeleteRequest$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceDeleteRequestToJSON(c1ApiSystemlogV1ExportServiceDeleteRequest: C1ApiSystemlogV1ExportServiceDeleteRequest): string;
export declare function c1ApiSystemlogV1ExportServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportServiceDeleteResponse?: shared.ExportServiceDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceDeleteResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceDeleteResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceDeleteResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceDeleteResponseToJSON(c1ApiSystemlogV1ExportServiceDeleteResponse: C1ApiSystemlogV1ExportServiceDeleteResponse): string;
export declare function c1ApiSystemlogV1ExportServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceDeleteResponse, SDKValidationError>;
