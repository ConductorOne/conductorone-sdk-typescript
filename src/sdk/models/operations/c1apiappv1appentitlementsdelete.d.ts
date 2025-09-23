import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsDeleteRequest = {
    appId: string | null;
    id: string | null;
    deleteAppEntitlementRequest?: shared.DeleteAppEntitlementRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsDeleteResponse = {
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
    deleteAppEntitlementResponse?: shared.DeleteAppEntitlementResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsDeleteRequest$Outbound = {
    app_id: string | null;
    id: string | null;
    DeleteAppEntitlementRequest?: shared.DeleteAppEntitlementRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsDeleteRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsDeleteRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsDeleteRequestToJSON(c1ApiAppV1AppEntitlementsDeleteRequest: C1ApiAppV1AppEntitlementsDeleteRequest): string;
export declare function c1ApiAppV1AppEntitlementsDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAppEntitlementResponse?: shared.DeleteAppEntitlementResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsDeleteResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsDeleteResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsDeleteResponseToJSON(c1ApiAppV1AppEntitlementsDeleteResponse: C1ApiAppV1AppEntitlementsDeleteResponse): string;
export declare function c1ApiAppV1AppEntitlementsDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsDeleteResponse, SDKValidationError>;
