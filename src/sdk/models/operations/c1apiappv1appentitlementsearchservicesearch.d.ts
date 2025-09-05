import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementSearchServiceSearchResponse = {
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
    appEntitlementSearchServiceSearchResponse?: shared.AppEntitlementSearchServiceSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementSearchServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppEntitlementSearchServiceSearchResponse?: shared.AppEntitlementSearchServiceSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementSearchServiceSearchResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementSearchServiceSearchResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchResponseToJSON(c1ApiAppV1AppEntitlementSearchServiceSearchResponse: C1ApiAppV1AppEntitlementSearchServiceSearchResponse): string;
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementSearchServiceSearchResponse, SDKValidationError>;
