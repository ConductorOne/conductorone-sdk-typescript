import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsCreateRequest = {
    appId: string | null;
    createAppEntitlementRequest?: shared.CreateAppEntitlementRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsCreateResponse = {
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
    createAppEntitlementResponse?: shared.CreateAppEntitlementResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsCreateRequest$Outbound = {
    app_id: string | null;
    CreateAppEntitlementRequest?: shared.CreateAppEntitlementRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsCreateRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsCreateRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsCreateRequestToJSON(c1ApiAppV1AppEntitlementsCreateRequest: C1ApiAppV1AppEntitlementsCreateRequest): string;
export declare function c1ApiAppV1AppEntitlementsCreateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsCreateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateAppEntitlementResponse?: shared.CreateAppEntitlementResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsCreateResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsCreateResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsCreateResponseToJSON(c1ApiAppV1AppEntitlementsCreateResponse: C1ApiAppV1AppEntitlementsCreateResponse): string;
export declare function c1ApiAppV1AppEntitlementsCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsCreateResponse, SDKValidationError>;
