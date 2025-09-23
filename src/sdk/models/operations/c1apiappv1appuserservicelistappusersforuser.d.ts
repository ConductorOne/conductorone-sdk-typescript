import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUserServiceListAppUsersForUserRequest = {
    appId: string | null;
    userId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppUserServiceListAppUsersForUserResponse = {
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
    appUsersForUserServiceListResponse?: shared.AppUsersForUserServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUsersForUserRequest$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceListAppUsersForUserRequest$Outbound = {
    app_id: string | null;
    user_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUsersForUserRequest$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUsersForUserRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceListAppUsersForUserRequest$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUsersForUserRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUsersForUserRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUsersForUserRequest>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUsersForUserRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceListAppUsersForUserRequest$Outbound;
}
export declare function c1ApiAppV1AppUserServiceListAppUsersForUserRequestToJSON(c1ApiAppV1AppUserServiceListAppUsersForUserRequest: C1ApiAppV1AppUserServiceListAppUsersForUserRequest): string;
export declare function c1ApiAppV1AppUserServiceListAppUsersForUserRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceListAppUsersForUserRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUsersForUserResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceListAppUsersForUserResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppUsersForUserServiceListResponse?: shared.AppUsersForUserServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListAppUsersForUserResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUsersForUserResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceListAppUsersForUserResponse$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUsersForUserResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUsersForUserResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListAppUsersForUserResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListAppUsersForUserResponse>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListAppUsersForUserResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceListAppUsersForUserResponse$Outbound;
}
export declare function c1ApiAppV1AppUserServiceListAppUsersForUserResponseToJSON(c1ApiAppV1AppUserServiceListAppUsersForUserResponse: C1ApiAppV1AppUserServiceListAppUsersForUserResponse): string;
export declare function c1ApiAppV1AppUserServiceListAppUsersForUserResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceListAppUsersForUserResponse, SDKValidationError>;
