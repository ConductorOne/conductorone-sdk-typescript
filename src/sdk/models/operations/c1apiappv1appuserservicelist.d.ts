import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUserServiceListRequest = {
    appId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppUserServiceListResponse = {
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
    appUserServiceListResponse?: shared.AppUserServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceListRequest$Outbound = {
    app_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceListRequest$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListRequest>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceListRequest$Outbound;
}
export declare function c1ApiAppV1AppUserServiceListRequestToJSON(c1ApiAppV1AppUserServiceListRequest: C1ApiAppV1AppUserServiceListRequest): string;
export declare function c1ApiAppV1AppUserServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppUserServiceListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUserServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppUserServiceListResponse?: shared.AppUserServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUserServiceListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUserServiceListResponse$ {
    /** @deprecated use `C1ApiAppV1AppUserServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUserServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUserServiceListResponse>;
    /** @deprecated use `C1ApiAppV1AppUserServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUserServiceListResponse$Outbound;
}
export declare function c1ApiAppV1AppUserServiceListResponseToJSON(c1ApiAppV1AppUserServiceListResponse: C1ApiAppV1AppUserServiceListResponse): string;
export declare function c1ApiAppV1AppUserServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUserServiceListResponse, SDKValidationError>;
