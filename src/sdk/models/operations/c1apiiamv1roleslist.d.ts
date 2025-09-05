import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1RolesListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiIamV1RolesListResponse = {
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
     * The ListRolesResponse message contains a list of results and a nextPageToken if applicable.
     */
    listRolesResponse?: shared.ListRolesResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesListRequest$inboundSchema: z.ZodType<C1ApiIamV1RolesListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1RolesListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesListRequest$outboundSchema: z.ZodType<C1ApiIamV1RolesListRequest$Outbound, z.ZodTypeDef, C1ApiIamV1RolesListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1RolesListRequest$ {
    /** @deprecated use `C1ApiIamV1RolesListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1RolesListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1RolesListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1RolesListRequest$Outbound, z.ZodTypeDef, C1ApiIamV1RolesListRequest>;
    /** @deprecated use `C1ApiIamV1RolesListRequest$Outbound` instead. */
    type Outbound = C1ApiIamV1RolesListRequest$Outbound;
}
export declare function c1ApiIamV1RolesListRequestToJSON(c1ApiIamV1RolesListRequest: C1ApiIamV1RolesListRequest): string;
export declare function c1ApiIamV1RolesListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1RolesListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiIamV1RolesListResponse$inboundSchema: z.ZodType<C1ApiIamV1RolesListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1RolesListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListRolesResponse?: shared.ListRolesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesListResponse$outboundSchema: z.ZodType<C1ApiIamV1RolesListResponse$Outbound, z.ZodTypeDef, C1ApiIamV1RolesListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1RolesListResponse$ {
    /** @deprecated use `C1ApiIamV1RolesListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1RolesListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1RolesListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1RolesListResponse$Outbound, z.ZodTypeDef, C1ApiIamV1RolesListResponse>;
    /** @deprecated use `C1ApiIamV1RolesListResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1RolesListResponse$Outbound;
}
export declare function c1ApiIamV1RolesListResponseToJSON(c1ApiIamV1RolesListResponse: C1ApiIamV1RolesListResponse): string;
export declare function c1ApiIamV1RolesListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1RolesListResponse, SDKValidationError>;
