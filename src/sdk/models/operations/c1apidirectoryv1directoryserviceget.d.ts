import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiDirectoryV1DirectoryServiceGetRequest = {
    appId: string | null;
};
export type C1ApiDirectoryV1DirectoryServiceGetResponse = {
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
     * The Directory Service Get Response returns a directory view with a directory and JSONPATHs indicating the
     *
     * @remarks
     *  location in the expanded array that items are expanded as indicated by the expand mask in the request.
     */
    directoryServiceGetResponse?: shared.DirectoryServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceGetRequest$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceGetRequest$Outbound = {
    app_id: string | null;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceGetRequest$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceGetRequest$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceGetRequest>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceGetRequest$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceGetRequestToJSON(c1ApiDirectoryV1DirectoryServiceGetRequest: C1ApiDirectoryV1DirectoryServiceGetRequest): string;
export declare function c1ApiDirectoryV1DirectoryServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceGetResponse$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DirectoryServiceGetResponse?: shared.DirectoryServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceGetResponse$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceGetResponse$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceGetResponse>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceGetResponse$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceGetResponseToJSON(c1ApiDirectoryV1DirectoryServiceGetResponse: C1ApiDirectoryV1DirectoryServiceGetResponse): string;
export declare function c1ApiDirectoryV1DirectoryServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceGetResponse, SDKValidationError>;
