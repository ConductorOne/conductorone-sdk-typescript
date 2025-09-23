import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsGetRequest = {
    appId: string | null;
    id: string | null;
};
export type C1ApiAppV1AppEntitlementsGetResponse = {
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
     * The get app entitlement response returns an entitlement view containing paths in the expanded array for the objects expanded as indicated by the expand mask in the request.
     */
    getAppEntitlementResponse?: shared.GetAppEntitlementResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsGetRequest$Outbound = {
    app_id: string | null;
    id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsGetRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsGetRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsGetRequestToJSON(c1ApiAppV1AppEntitlementsGetRequest: C1ApiAppV1AppEntitlementsGetRequest): string;
export declare function c1ApiAppV1AppEntitlementsGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAppEntitlementResponse?: shared.GetAppEntitlementResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsGetResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsGetResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsGetResponseToJSON(c1ApiAppV1AppEntitlementsGetResponse: C1ApiAppV1AppEntitlementsGetResponse): string;
export declare function c1ApiAppV1AppEntitlementsGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsGetResponse, SDKValidationError>;
