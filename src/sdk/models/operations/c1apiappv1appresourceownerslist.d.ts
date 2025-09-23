import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceOwnersListRequest = {
    appId: string | null;
    resourceTypeId: string | null;
    resourceId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppResourceOwnersListResponse = {
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
     * The ListAppResourceOwnersResponse message contains a list of results and a nextPageToken if applicable
     */
    listAppResourceOwnersResponse?: shared.ListAppResourceOwnersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceOwnersListRequest$Outbound = {
    app_id: string | null;
    resource_type_id: string | null;
    resource_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceOwnersListRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceOwnersListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersListRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceOwnersListRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceOwnersListRequestToJSON(c1ApiAppV1AppResourceOwnersListRequest: C1ApiAppV1AppResourceOwnersListRequest): string;
export declare function c1ApiAppV1AppResourceOwnersListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceOwnersListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceOwnersListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppResourceOwnersResponse?: shared.ListAppResourceOwnersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceOwnersListResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceOwnersListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersListResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceOwnersListResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceOwnersListResponseToJSON(c1ApiAppV1AppResourceOwnersListResponse: C1ApiAppV1AppResourceOwnersListResponse): string;
export declare function c1ApiAppV1AppResourceOwnersListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceOwnersListResponse, SDKValidationError>;
