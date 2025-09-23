import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse = {
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
     * The SearchPastGrantsResponse message contains a list of past grants and a nextPageToken if applicable.
     */
    searchPastGrantsResponse?: shared.SearchPastGrantsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchPastGrantsResponse?: shared.SearchPastGrantsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponseToJSON(c1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse: C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse, SDKValidationError>;
