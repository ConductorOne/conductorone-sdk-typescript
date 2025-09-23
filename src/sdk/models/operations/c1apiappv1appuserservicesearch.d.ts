import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUserServiceSearchResponse = {
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
    appUserServiceSearchResponse?: shared.AppUserServiceSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceSearchResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppUserServiceSearchResponse?: shared.AppUserServiceSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceSearchResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceSearchResponse$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceSearchResponse>;
    /** @deprecated use `C1ApiAppV1AppUserServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceSearchResponse$Outbound;
}
export declare function c1ApiAppV1AppUserServiceSearchResponseToJSON(c1ApiAppV1AppUserServiceSearchResponse: C1ApiAppV1AppUserServiceSearchResponse): string;
export declare function c1ApiAppV1AppUserServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceSearchResponse, SDKValidationError>;
