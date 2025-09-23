import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiDirectoryV1DirectoryServiceDeleteRequest = {
    appId: string | null;
    directoryServiceDeleteRequest?: shared.DirectoryServiceDeleteRequest | undefined;
};
export type C1ApiDirectoryV1DirectoryServiceDeleteResponse = {
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
     * Empty response with a status code indicating success.
     */
    directoryServiceDeleteResponse?: shared.DirectoryServiceDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceDeleteRequest$Outbound = {
    app_id: string | null;
    DirectoryServiceDeleteRequest?: shared.DirectoryServiceDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceDeleteRequest$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceDeleteRequest>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceDeleteRequest$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceDeleteRequestToJSON(c1ApiDirectoryV1DirectoryServiceDeleteRequest: C1ApiDirectoryV1DirectoryServiceDeleteRequest): string;
export declare function c1ApiDirectoryV1DirectoryServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DirectoryServiceDeleteResponse?: shared.DirectoryServiceDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceDeleteResponse$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceDeleteResponse>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceDeleteResponse$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceDeleteResponseToJSON(c1ApiDirectoryV1DirectoryServiceDeleteResponse: C1ApiDirectoryV1DirectoryServiceDeleteResponse): string;
export declare function c1ApiDirectoryV1DirectoryServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceDeleteResponse, SDKValidationError>;
