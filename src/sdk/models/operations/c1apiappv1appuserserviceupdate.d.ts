import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUserServiceUpdateRequest = {
    appUserAppId: string | null;
    appUserId: string | null;
    appUserServiceUpdateRequest?: shared.AppUserServiceUpdateRequest | undefined;
};
export type C1ApiAppV1AppUserServiceUpdateResponse = {
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
    appUserServiceUpdateResponse?: shared.AppUserServiceUpdateResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceUpdateRequest$Outbound = {
    app_user_app_id: string | null;
    app_user_id: string | null;
    AppUserServiceUpdateRequest?: shared.AppUserServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceUpdateRequest$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceUpdateRequest>;
    /** @deprecated use `C1ApiAppV1AppUserServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceUpdateRequest$Outbound;
}
export declare function c1ApiAppV1AppUserServiceUpdateRequestToJSON(c1ApiAppV1AppUserServiceUpdateRequest: C1ApiAppV1AppUserServiceUpdateRequest): string;
export declare function c1ApiAppV1AppUserServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppUserServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppUserServiceUpdateResponse?: shared.AppUserServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceUpdateResponse$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceUpdateResponse>;
    /** @deprecated use `C1ApiAppV1AppUserServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceUpdateResponse$Outbound;
}
export declare function c1ApiAppV1AppUserServiceUpdateResponseToJSON(c1ApiAppV1AppUserServiceUpdateResponse: C1ApiAppV1AppUserServiceUpdateResponse): string;
export declare function c1ApiAppV1AppUserServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceUpdateResponse, SDKValidationError>;
