import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppOwnersListRequest = {
    appId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppOwnersListResponse = {
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
    listAppOwnersResponse?: shared.ListAppOwnersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersListRequest$Outbound = {
    app_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersListRequest$ {
    /** @deprecated use `C1ApiAppV1AppOwnersListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersListRequest>;
    /** @deprecated use `C1ApiAppV1AppOwnersListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersListRequest$Outbound;
}
export declare function c1ApiAppV1AppOwnersListRequestToJSON(c1ApiAppV1AppOwnersListRequest: C1ApiAppV1AppOwnersListRequest): string;
export declare function c1ApiAppV1AppOwnersListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppOwnersListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppOwnersResponse?: shared.ListAppOwnersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersListResponse$ {
    /** @deprecated use `C1ApiAppV1AppOwnersListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersListResponse>;
    /** @deprecated use `C1ApiAppV1AppOwnersListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersListResponse$Outbound;
}
export declare function c1ApiAppV1AppOwnersListResponseToJSON(c1ApiAppV1AppOwnersListResponse: C1ApiAppV1AppOwnersListResponse): string;
export declare function c1ApiAppV1AppOwnersListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersListResponse, SDKValidationError>;
