import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppUsageControlsServiceUpdateRequest = {
    appId: string | null;
    updateAppUsageControlsRequest?: shared.UpdateAppUsageControlsRequest | undefined;
};
export type C1ApiAppV1AppUsageControlsServiceUpdateResponse = {
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
     * The UpdateAppUsageControlsResponse message contains the updated AppUsageControls object.
     */
    updateAppUsageControlsResponse?: shared.UpdateAppUsageControlsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUsageControlsServiceUpdateRequest$Outbound = {
    app_id: string | null;
    UpdateAppUsageControlsRequest?: shared.UpdateAppUsageControlsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUsageControlsServiceUpdateRequest$ {
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceUpdateRequest>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUsageControlsServiceUpdateRequest$Outbound;
}
export declare function c1ApiAppV1AppUsageControlsServiceUpdateRequestToJSON(c1ApiAppV1AppUsageControlsServiceUpdateRequest: C1ApiAppV1AppUsageControlsServiceUpdateRequest): string;
export declare function c1ApiAppV1AppUsageControlsServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUsageControlsServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppUsageControlsServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateAppUsageControlsResponse?: shared.UpdateAppUsageControlsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppUsageControlsServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppUsageControlsServiceUpdateResponse$ {
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppUsageControlsServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppUsageControlsServiceUpdateResponse>;
    /** @deprecated use `C1ApiAppV1AppUsageControlsServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppUsageControlsServiceUpdateResponse$Outbound;
}
export declare function c1ApiAppV1AppUsageControlsServiceUpdateResponseToJSON(c1ApiAppV1AppUsageControlsServiceUpdateResponse: C1ApiAppV1AppUsageControlsServiceUpdateResponse): string;
export declare function c1ApiAppV1AppUsageControlsServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppUsageControlsServiceUpdateResponse, SDKValidationError>;
