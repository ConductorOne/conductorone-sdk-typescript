import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse = {
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
     * The SearchGrantFeedResponse message contains a list of grant event results and a nextPageToken if applicable.
     */
    searchGrantFeedResponse?: shared.SearchGrantFeedResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchGrantFeedResponse?: shared.SearchGrantFeedResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponseToJSON(c1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse: C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse, SDKValidationError>;
