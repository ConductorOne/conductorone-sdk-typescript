import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest = {
    appId: string | null;
    appAccessRequestDefaults?: shared.AppAccessRequestDefaults1 | undefined;
};
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse = {
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
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$Outbound = {
    app_id: string | null;
    AppAccessRequestDefaults?: shared.AppAccessRequestDefaults1$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$ {
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest$Outbound;
}
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequestToJSON(c1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest: C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest): string;
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppAccessRequestDefaults?: shared.AppAccessRequestDefaults$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$ {
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse$Outbound;
}
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponseToJSON(c1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse: C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse): string;
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppAccessRequestsDefaultsServiceCreateAppAccessRequestsDefaultsResponse, SDKValidationError>;
