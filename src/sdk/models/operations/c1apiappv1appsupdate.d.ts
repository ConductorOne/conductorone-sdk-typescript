import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppsUpdateRequest = {
    id: string | null;
    updateAppRequest?: shared.UpdateAppRequest | undefined;
};
export type C1ApiAppV1AppsUpdateResponse = {
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
     * Returns the updated app's new values.
     */
    updateAppResponse?: shared.UpdateAppResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsUpdateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppsUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsUpdateRequest$Outbound = {
    id: string | null;
    UpdateAppRequest?: shared.UpdateAppRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsUpdateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppsUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsUpdateRequest$ {
    /** @deprecated use `C1ApiAppV1AppsUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsUpdateRequest>;
    /** @deprecated use `C1ApiAppV1AppsUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsUpdateRequest$Outbound;
}
export declare function c1ApiAppV1AppsUpdateRequestToJSON(c1ApiAppV1AppsUpdateRequest: C1ApiAppV1AppsUpdateRequest): string;
export declare function c1ApiAppV1AppsUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppsUpdateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppsUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateAppResponse?: shared.UpdateAppResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsUpdateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppsUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsUpdateResponse$ {
    /** @deprecated use `C1ApiAppV1AppsUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsUpdateResponse>;
    /** @deprecated use `C1ApiAppV1AppsUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsUpdateResponse$Outbound;
}
export declare function c1ApiAppV1AppsUpdateResponseToJSON(c1ApiAppV1AppsUpdateResponse: C1ApiAppV1AppsUpdateResponse): string;
export declare function c1ApiAppV1AppsUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsUpdateResponse, SDKValidationError>;
