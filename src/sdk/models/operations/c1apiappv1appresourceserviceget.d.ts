import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceServiceGetRequest = {
    appId: string | null;
    appResourceTypeId: string | null;
    id: string | null;
};
export type C1ApiAppV1AppResourceServiceGetResponse = {
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
     * The app resource service get response contains the app resource view and array of expanded items indicated by the request's expand mask.
     */
    appResourceServiceGetResponse?: shared.AppResourceServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceGetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceGetRequest$Outbound = {
    app_id: string | null;
    app_resource_type_id: string | null;
    id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceGetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceGetRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceGetRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceGetRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceGetRequestToJSON(c1ApiAppV1AppResourceServiceGetRequest: C1ApiAppV1AppResourceServiceGetRequest): string;
export declare function c1ApiAppV1AppResourceServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceServiceGetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppResourceServiceGetResponse?: shared.AppResourceServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceGetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceGetResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceGetResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceGetResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceGetResponseToJSON(c1ApiAppV1AppResourceServiceGetResponse: C1ApiAppV1AppResourceServiceGetResponse): string;
export declare function c1ApiAppV1AppResourceServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceGetResponse, SDKValidationError>;
