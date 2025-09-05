import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiUserV1UserServiceListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiUserV1UserServiceListResponse = {
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
     * The UserServiceListResponse message contains a list of results and a nextPageToken if applicable.
     */
    userServiceListResponse?: shared.UserServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserServiceListRequest$inboundSchema: z.ZodType<C1ApiUserV1UserServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiUserV1UserServiceListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserServiceListRequest$outboundSchema: z.ZodType<C1ApiUserV1UserServiceListRequest$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiUserV1UserServiceListRequest$ {
    /** @deprecated use `C1ApiUserV1UserServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiUserV1UserServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiUserV1UserServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiUserV1UserServiceListRequest$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceListRequest>;
    /** @deprecated use `C1ApiUserV1UserServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiUserV1UserServiceListRequest$Outbound;
}
export declare function c1ApiUserV1UserServiceListRequestToJSON(c1ApiUserV1UserServiceListRequest: C1ApiUserV1UserServiceListRequest): string;
export declare function c1ApiUserV1UserServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiUserV1UserServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiUserV1UserServiceListResponse$inboundSchema: z.ZodType<C1ApiUserV1UserServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiUserV1UserServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UserServiceListResponse?: shared.UserServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserServiceListResponse$outboundSchema: z.ZodType<C1ApiUserV1UserServiceListResponse$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiUserV1UserServiceListResponse$ {
    /** @deprecated use `C1ApiUserV1UserServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiUserV1UserServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiUserV1UserServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiUserV1UserServiceListResponse$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceListResponse>;
    /** @deprecated use `C1ApiUserV1UserServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiUserV1UserServiceListResponse$Outbound;
}
export declare function c1ApiUserV1UserServiceListResponseToJSON(c1ApiUserV1UserServiceListResponse: C1ApiUserV1UserServiceListResponse): string;
export declare function c1ApiUserV1UserServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiUserV1UserServiceListResponse, SDKValidationError>;
