import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppsGetRequest = {
    id: string | null;
};
export type C1ApiAppV1AppsGetResponse = {
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
     * The GetAppResponse message contains the details of the requested app in the app field.
     */
    getAppResponse?: shared.GetAppResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsGetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppsGetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppsGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsGetRequest$ {
    /** @deprecated use `C1ApiAppV1AppsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsGetRequest>;
    /** @deprecated use `C1ApiAppV1AppsGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsGetRequest$Outbound;
}
export declare function c1ApiAppV1AppsGetRequestToJSON(c1ApiAppV1AppsGetRequest: C1ApiAppV1AppsGetRequest): string;
export declare function c1ApiAppV1AppsGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppsGetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppsGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAppResponse?: shared.GetAppResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsGetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppsGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsGetResponse$ {
    /** @deprecated use `C1ApiAppV1AppsGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsGetResponse>;
    /** @deprecated use `C1ApiAppV1AppsGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsGetResponse$Outbound;
}
export declare function c1ApiAppV1AppsGetResponseToJSON(c1ApiAppV1AppsGetResponse: C1ApiAppV1AppsGetResponse): string;
export declare function c1ApiAppV1AppsGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsGetResponse, SDKValidationError>;
