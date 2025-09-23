import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest = {
    appId: string | null;
    cancelAccessRequestDefaultsRequest?: shared.CancelAccessRequestDefaultsRequest | undefined;
};
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse = {
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
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$Outbound = {
    app_id: string | null;
    CancelAccessRequestDefaultsRequest?: shared.CancelAccessRequestDefaultsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$ {
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest$Outbound;
}
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequestToJSON(c1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest: C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest): string;
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppAccessRequestDefaults?: shared.AppAccessRequestDefaults$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$ {
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse>;
    /** @deprecated use `C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse$Outbound;
}
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponseToJSON(c1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse: C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse): string;
export declare function c1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppAccessRequestsDefaultsServiceCancelAppAccessRequestsDefaultsResponse, SDKValidationError>;
