import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUserServiceListAppUserCredentialsRequest = {
    appId: string | null;
    appUserId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppUserServiceListAppUserCredentialsResponse = {
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
    appUserServiceListCredentialsResponse?: shared.AppUserServiceListCredentialsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$Outbound = {
    app_id: string | null;
    app_user_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUserCredentialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUserCredentialsRequest>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceListAppUserCredentialsRequest$Outbound;
}
export declare function c1ApiAppV1AppUserServiceListAppUserCredentialsRequestToJSON(c1ApiAppV1AppUserServiceListAppUserCredentialsRequest: C1ApiAppV1AppUserServiceListAppUserCredentialsRequest): string;
export declare function c1ApiAppV1AppUserServiceListAppUserCredentialsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceListAppUserCredentialsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppUserServiceListCredentialsResponse?: shared.AppUserServiceListCredentialsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUserCredentialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUserCredentialsResponse>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceListAppUserCredentialsResponse$Outbound;
}
export declare function c1ApiAppV1AppUserServiceListAppUserCredentialsResponseToJSON(c1ApiAppV1AppUserServiceListAppUserCredentialsResponse: C1ApiAppV1AppUserServiceListAppUserCredentialsResponse): string;
export declare function c1ApiAppV1AppUserServiceListAppUserCredentialsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceListAppUserCredentialsResponse, SDKValidationError>;
