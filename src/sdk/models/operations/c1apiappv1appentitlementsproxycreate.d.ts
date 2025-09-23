import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsProxyCreateRequest = {
    srcAppId: string | null;
    srcAppEntitlementId: string | null;
    dstAppId: string | null;
    dstAppEntitlementId: string | null;
    createAppEntitlementProxyRequest?: shared.CreateAppEntitlementProxyRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsProxyCreateResponse = {
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
    createAppEntitlementProxyResponse?: shared.CreateAppEntitlementProxyResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyCreateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsProxyCreateRequest$Outbound = {
    src_app_id: string | null;
    src_app_entitlement_id: string | null;
    dst_app_id: string | null;
    dst_app_entitlement_id: string | null;
    CreateAppEntitlementProxyRequest?: shared.CreateAppEntitlementProxyRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyCreateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsProxyCreateRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyCreateRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyCreateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsProxyCreateRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsProxyCreateRequestToJSON(c1ApiAppV1AppEntitlementsProxyCreateRequest: C1ApiAppV1AppEntitlementsProxyCreateRequest): string;
export declare function c1ApiAppV1AppEntitlementsProxyCreateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsProxyCreateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyCreateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsProxyCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateAppEntitlementProxyResponse?: shared.CreateAppEntitlementProxyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyCreateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsProxyCreateResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyCreateResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyCreateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsProxyCreateResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsProxyCreateResponseToJSON(c1ApiAppV1AppEntitlementsProxyCreateResponse: C1ApiAppV1AppEntitlementsProxyCreateResponse): string;
export declare function c1ApiAppV1AppEntitlementsProxyCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsProxyCreateResponse, SDKValidationError>;
