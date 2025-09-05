import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsProxyGetRequest = {
    srcAppId: string | null;
    srcAppEntitlementId: string | null;
    dstAppId: string | null;
    dstAppEntitlementId: string | null;
};
export type C1ApiAppV1AppEntitlementsProxyGetResponse = {
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
    getAppEntitlementProxyResponse?: shared.GetAppEntitlementProxyResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyGetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsProxyGetRequest$Outbound = {
    src_app_id: string | null;
    src_app_entitlement_id: string | null;
    dst_app_id: string | null;
    dst_app_entitlement_id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyGetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsProxyGetRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyGetRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsProxyGetRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsProxyGetRequestToJSON(c1ApiAppV1AppEntitlementsProxyGetRequest: C1ApiAppV1AppEntitlementsProxyGetRequest): string;
export declare function c1ApiAppV1AppEntitlementsProxyGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsProxyGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyGetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsProxyGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAppEntitlementProxyResponse?: shared.GetAppEntitlementProxyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsProxyGetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsProxyGetResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsProxyGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsProxyGetResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsProxyGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsProxyGetResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsProxyGetResponseToJSON(c1ApiAppV1AppEntitlementsProxyGetResponse: C1ApiAppV1AppEntitlementsProxyGetResponse): string;
export declare function c1ApiAppV1AppEntitlementsProxyGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsProxyGetResponse, SDKValidationError>;
