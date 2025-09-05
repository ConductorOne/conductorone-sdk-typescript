import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse = {
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
    appEntitlementSearchServiceSearchGrantsResponse?: shared.AppEntitlementSearchServiceSearchGrantsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppEntitlementSearchServiceSearchGrantsResponse?: shared.AppEntitlementSearchServiceSearchGrantsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponseToJSON(c1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse: C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse): string;
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementSearchServiceSearchGrantsResponse, SDKValidationError>;
