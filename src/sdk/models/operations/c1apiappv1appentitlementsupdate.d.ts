import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsUpdateRequest = {
    appId: string | null;
    id: string | null;
    updateAppEntitlementRequest?: shared.UpdateAppEntitlementRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsUpdateResponse = {
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
    updateAppEntitlementResponse?: shared.UpdateAppEntitlementResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsUpdateRequest$Outbound = {
    app_id: string | null;
    id: string | null;
    UpdateAppEntitlementRequest?: shared.UpdateAppEntitlementRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsUpdateRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsUpdateRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsUpdateRequestToJSON(c1ApiAppV1AppEntitlementsUpdateRequest: C1ApiAppV1AppEntitlementsUpdateRequest): string;
export declare function c1ApiAppV1AppEntitlementsUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateAppEntitlementResponse?: shared.UpdateAppEntitlementResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsUpdateResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsUpdateResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsUpdateResponseToJSON(c1ApiAppV1AppEntitlementsUpdateResponse: C1ApiAppV1AppEntitlementsUpdateResponse): string;
export declare function c1ApiAppV1AppEntitlementsUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsUpdateResponse, SDKValidationError>;
