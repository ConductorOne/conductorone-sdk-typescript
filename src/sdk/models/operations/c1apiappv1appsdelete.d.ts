import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppsDeleteRequest = {
    id: string | null;
    deleteAppRequest?: shared.DeleteAppRequest | undefined;
};
export type C1ApiAppV1AppsDeleteResponse = {
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
     * Empty response body. Status code indicates success.
     */
    deleteAppResponse?: shared.DeleteAppResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsDeleteRequest$inboundSchema: z.ZodType<C1ApiAppV1AppsDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsDeleteRequest$Outbound = {
    id: string | null;
    DeleteAppRequest?: shared.DeleteAppRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsDeleteRequest$outboundSchema: z.ZodType<C1ApiAppV1AppsDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsDeleteRequest$ {
    /** @deprecated use `C1ApiAppV1AppsDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsDeleteRequest>;
    /** @deprecated use `C1ApiAppV1AppsDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsDeleteRequest$Outbound;
}
export declare function c1ApiAppV1AppsDeleteRequestToJSON(c1ApiAppV1AppsDeleteRequest: C1ApiAppV1AppsDeleteRequest): string;
export declare function c1ApiAppV1AppsDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppsDeleteResponse$inboundSchema: z.ZodType<C1ApiAppV1AppsDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAppResponse?: shared.DeleteAppResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsDeleteResponse$outboundSchema: z.ZodType<C1ApiAppV1AppsDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsDeleteResponse$ {
    /** @deprecated use `C1ApiAppV1AppsDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsDeleteResponse>;
    /** @deprecated use `C1ApiAppV1AppsDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsDeleteResponse$Outbound;
}
export declare function c1ApiAppV1AppsDeleteResponseToJSON(c1ApiAppV1AppsDeleteResponse: C1ApiAppV1AppsDeleteResponse): string;
export declare function c1ApiAppV1AppsDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsDeleteResponse, SDKValidationError>;
