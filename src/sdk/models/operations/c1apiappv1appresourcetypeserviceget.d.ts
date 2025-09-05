import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceTypeServiceGetRequest = {
    appId: string | null;
    id: string | null;
};
export type C1ApiAppV1AppResourceTypeServiceGetResponse = {
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
     * The AppResourceTypeServiceGetResponse contains an expanded array containing the expanded values indicated by the expand mask
     *
     * @remarks
     *  in the request and an app resource type view containing the resource type and JSONPATHs indicating which objects are where in the expand mask.
     */
    appResourceTypeServiceGetResponse?: shared.AppResourceTypeServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceGetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceGetRequest$Outbound = {
    app_id: string | null;
    id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceGetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceGetRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceGetRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceGetRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceGetRequestToJSON(c1ApiAppV1AppResourceTypeServiceGetRequest: C1ApiAppV1AppResourceTypeServiceGetRequest): string;
export declare function c1ApiAppV1AppResourceTypeServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceGetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppResourceTypeServiceGetResponse?: shared.AppResourceTypeServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceGetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceGetResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceGetResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceGetResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceGetResponseToJSON(c1ApiAppV1AppResourceTypeServiceGetResponse: C1ApiAppV1AppResourceTypeServiceGetResponse): string;
export declare function c1ApiAppV1AppResourceTypeServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceGetResponse, SDKValidationError>;
