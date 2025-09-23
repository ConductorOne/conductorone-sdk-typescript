import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportServiceUpdateRequest = {
    exportId: string | null;
    exportServiceUpdateRequest?: shared.ExportServiceUpdateRequest | undefined;
};
export type C1ApiSystemlogV1ExportServiceUpdateResponse = {
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
    exportServiceUpdateResponse?: shared.ExportServiceUpdateResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceUpdateRequest$Outbound = {
    export_id: string | null;
    ExportServiceUpdateRequest?: shared.ExportServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceUpdateRequest$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceUpdateRequest>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceUpdateRequest$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceUpdateRequestToJSON(c1ApiSystemlogV1ExportServiceUpdateRequest: C1ApiSystemlogV1ExportServiceUpdateRequest): string;
export declare function c1ApiSystemlogV1ExportServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportServiceUpdateResponse?: shared.ExportServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceUpdateResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceUpdateResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceUpdateResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceUpdateResponseToJSON(c1ApiSystemlogV1ExportServiceUpdateResponse: C1ApiSystemlogV1ExportServiceUpdateResponse): string;
export declare function c1ApiSystemlogV1ExportServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceUpdateResponse, SDKValidationError>;
