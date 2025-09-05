import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsListForAppUserRequest = {
    appId: string | null;
    appUserId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementsListForAppUserResponse = {
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
     * The ListAppEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
     */
    listAppEntitlementsResponse?: shared.ListAppEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppUserRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListForAppUserRequest$Outbound = {
    app_id: string | null;
    app_user_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppUserRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppUserRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListForAppUserRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppUserRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppUserRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppUserRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppUserRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListForAppUserRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListForAppUserRequestToJSON(c1ApiAppV1AppEntitlementsListForAppUserRequest: C1ApiAppV1AppEntitlementsListForAppUserRequest): string;
export declare function c1ApiAppV1AppEntitlementsListForAppUserRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListForAppUserRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppUserResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListForAppUserResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppEntitlementsResponse?: shared.ListAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppUserResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppUserResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListForAppUserResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppUserResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppUserResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppUserResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppUserResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppUserResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListForAppUserResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListForAppUserResponseToJSON(c1ApiAppV1AppEntitlementsListForAppUserResponse: C1ApiAppV1AppEntitlementsListForAppUserResponse): string;
export declare function c1ApiAppV1AppEntitlementsListForAppUserResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListForAppUserResponse, SDKValidationError>;
