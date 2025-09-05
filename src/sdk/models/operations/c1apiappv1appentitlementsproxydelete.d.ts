import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsProxyDeleteRequest = {
    srcAppId: string | null;
    srcAppEntitlementId: string | null;
    dstAppId: string | null;
    dstAppEntitlementId: string | null;
    deleteAppEntitlementProxyRequest?: shared.DeleteAppEntitlementProxyRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsProxyDeleteResponse = {
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
    deleteAppEntitlementProxyResponse?: shared.DeleteAppEntitlementProxyResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyDeleteRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsProxyDeleteRequest$Outbound = {
    src_app_id: string | null;
    src_app_entitlement_id: string | null;
    dst_app_id: string | null;
    dst_app_entitlement_id: string | null;
    DeleteAppEntitlementProxyRequest?: shared.DeleteAppEntitlementProxyRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyDeleteRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsProxyDeleteRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyDeleteRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsProxyDeleteRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsProxyDeleteRequestToJSON(c1ApiAppV1AppEntitlementsProxyDeleteRequest: C1ApiAppV1AppEntitlementsProxyDeleteRequest): string;
export declare function c1ApiAppV1AppEntitlementsProxyDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsProxyDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyDeleteResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsProxyDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAppEntitlementProxyResponse?: shared.DeleteAppEntitlementProxyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyDeleteResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsProxyDeleteResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyDeleteResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsProxyDeleteResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsProxyDeleteResponseToJSON(c1ApiAppV1AppEntitlementsProxyDeleteResponse: C1ApiAppV1AppEntitlementsProxyDeleteResponse): string;
export declare function c1ApiAppV1AppEntitlementsProxyDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsProxyDeleteResponse, SDKValidationError>;
