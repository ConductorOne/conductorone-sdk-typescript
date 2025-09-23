import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUsageControlsServiceGetRequest = {
    appId: string | null;
};
export type C1ApiAppV1AppUsageControlsServiceGetResponse = {
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
     * The GetAppUsageControlsResponse message contains the retrieved AppUsageControls object.
     */
    getAppUsageControlsResponse?: shared.GetAppUsageControlsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceGetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUsageControlsServiceGetRequest$Outbound = {
    app_id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceGetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUsageControlsServiceGetRequest$ {
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceGetRequest>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUsageControlsServiceGetRequest$Outbound;
}
export declare function c1ApiAppV1AppUsageControlsServiceGetRequestToJSON(c1ApiAppV1AppUsageControlsServiceGetRequest: C1ApiAppV1AppUsageControlsServiceGetRequest): string;
export declare function c1ApiAppV1AppUsageControlsServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUsageControlsServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceGetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUsageControlsServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAppUsageControlsResponse?: shared.GetAppUsageControlsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceGetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUsageControlsServiceGetResponse$ {
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceGetResponse>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUsageControlsServiceGetResponse$Outbound;
}
export declare function c1ApiAppV1AppUsageControlsServiceGetResponseToJSON(c1ApiAppV1AppUsageControlsServiceGetResponse: C1ApiAppV1AppUsageControlsServiceGetResponse): string;
export declare function c1ApiAppV1AppUsageControlsServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUsageControlsServiceGetResponse, SDKValidationError>;
