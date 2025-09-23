import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportServiceCreateResponse = {
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
    exportServiceCreateResponse?: shared.ExportServiceCreateResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceCreateResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportServiceCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportServiceCreateResponse?: shared.ExportServiceCreateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportServiceCreateResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportServiceCreateResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportServiceCreateResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportServiceCreateResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportServiceCreateResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportServiceCreateResponseToJSON(c1ApiSystemlogV1ExportServiceCreateResponse: C1ApiSystemlogV1ExportServiceCreateResponse): string;
export declare function c1ApiSystemlogV1ExportServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportServiceCreateResponse, SDKValidationError>;
