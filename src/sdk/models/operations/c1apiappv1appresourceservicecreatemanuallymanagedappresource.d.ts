import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest = {
    appId: string;
    appResourceTypeId: string;
    createManuallyManagedAppResourceRequest?: shared.CreateManuallyManagedAppResourceRequest | undefined;
};
export type C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse = {
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
    createManuallyManagedAppResourceResponse?: shared.CreateManuallyManagedAppResourceResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$Outbound = {
    app_id: string;
    app_resource_type_id: string;
    CreateManuallyManagedAppResourceRequest?: shared.CreateManuallyManagedAppResourceRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequestToJSON(c1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest: C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest): string;
export declare function c1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateManuallyManagedAppResourceResponse?: shared.CreateManuallyManagedAppResourceResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponseToJSON(c1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse: C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse): string;
export declare function c1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceCreateManuallyManagedAppResourceResponse, SDKValidationError>;
