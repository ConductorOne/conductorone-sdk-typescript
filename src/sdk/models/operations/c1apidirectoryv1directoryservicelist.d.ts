import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiDirectoryV1DirectoryServiceListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiDirectoryV1DirectoryServiceListResponse = {
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
     * The DirectoryServiceListResponse message contains a list of results and a nextPageToken if applicable.
     */
    directoryServiceListResponse?: shared.DirectoryServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceListRequest$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceListRequest$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListRequest$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceListRequest$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListRequest$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceListRequest>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceListRequest$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceListRequestToJSON(c1ApiDirectoryV1DirectoryServiceListRequest: C1ApiDirectoryV1DirectoryServiceListRequest): string;
export declare function c1ApiDirectoryV1DirectoryServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceListResponse$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DirectoryServiceListResponse?: shared.DirectoryServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceListResponse$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceListResponse$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceListResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceListResponse>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceListResponse$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceListResponseToJSON(c1ApiDirectoryV1DirectoryServiceListResponse: C1ApiDirectoryV1DirectoryServiceListResponse): string;
export declare function c1ApiDirectoryV1DirectoryServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceListResponse, SDKValidationError>;
