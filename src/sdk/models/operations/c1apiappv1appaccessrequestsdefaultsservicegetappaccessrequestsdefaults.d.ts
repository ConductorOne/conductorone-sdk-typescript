import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest = {
    appId: string | null;
};
export type C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse = {
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
    appAccessRequestDefaults?: shared.AppAccessRequestDefaults | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$Outbound = {
    app_id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$ {
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest$Outbound;
}
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequestToJSON(c1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest: C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest): string;
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppAccessRequestDefaults?: shared.AppAccessRequestDefaults$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$ {
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse$Outbound;
}
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponseToJSON(c1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse: C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse): string;
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppAccessRequestsDefaultsServiceGetAppAccessRequestsDefaultsResponse, SDKValidationError>;
