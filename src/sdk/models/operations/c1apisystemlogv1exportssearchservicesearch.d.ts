import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSystemlogV1ExportsSearchServiceSearchResponse = {
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
    exportsSearchServiceSearchResponse?: shared.ExportsSearchServiceSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportsSearchServiceSearchResponse$inboundSchema: z.ZodType<C1ApiSystemlogV1ExportsSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSystemlogV1ExportsSearchServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExportsSearchServiceSearchResponse?: shared.ExportsSearchServiceSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSystemlogV1ExportsSearchServiceSearchResponse$outboundSchema: z.ZodType<C1ApiSystemlogV1ExportsSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportsSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSystemlogV1ExportsSearchServiceSearchResponse$ {
    /** @deprecated use `C1ApiSystemlogV1ExportsSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSystemlogV1ExportsSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSystemlogV1ExportsSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSystemlogV1ExportsSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiSystemlogV1ExportsSearchServiceSearchResponse>;
    /** @deprecated use `C1ApiSystemlogV1ExportsSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiSystemlogV1ExportsSearchServiceSearchResponse$Outbound;
}
export declare function c1ApiSystemlogV1ExportsSearchServiceSearchResponseToJSON(c1ApiSystemlogV1ExportsSearchServiceSearchResponse: C1ApiSystemlogV1ExportsSearchServiceSearchResponse): string;
export declare function c1ApiSystemlogV1ExportsSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSystemlogV1ExportsSearchServiceSearchResponse, SDKValidationError>;
