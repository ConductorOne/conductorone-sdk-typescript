import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiDirectoryV1DirectoryServiceCreateResponse = {
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
     * The DirectoryServiceCreateResponse message.
     */
    directoryServiceCreateResponse?: shared.DirectoryServiceCreateResponse | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceCreateResponse$inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiDirectoryV1DirectoryServiceCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DirectoryServiceCreateResponse?: shared.DirectoryServiceCreateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiDirectoryV1DirectoryServiceCreateResponse$outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiDirectoryV1DirectoryServiceCreateResponse$ {
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiDirectoryV1DirectoryServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiDirectoryV1DirectoryServiceCreateResponse>;
    /** @deprecated use `C1ApiDirectoryV1DirectoryServiceCreateResponse$Outbound` instead. */
    type Outbound = C1ApiDirectoryV1DirectoryServiceCreateResponse$Outbound;
}
export declare function c1ApiDirectoryV1DirectoryServiceCreateResponseToJSON(c1ApiDirectoryV1DirectoryServiceCreateResponse: C1ApiDirectoryV1DirectoryServiceCreateResponse): string;
export declare function c1ApiDirectoryV1DirectoryServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiDirectoryV1DirectoryServiceCreateResponse, SDKValidationError>;
