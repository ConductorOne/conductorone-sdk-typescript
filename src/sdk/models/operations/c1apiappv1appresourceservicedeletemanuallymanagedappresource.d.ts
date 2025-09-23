import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest = {
    appId: string | null;
    appResourceTypeId: string | null;
    id: string | null;
    deleteManuallyManagedAppResourceRequest?: shared.DeleteManuallyManagedAppResourceRequest | undefined;
};
export type C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse = {
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
    deleteManuallyManagedAppResourceResponse?: shared.DeleteManuallyManagedAppResourceResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$Outbound = {
    app_id: string | null;
    app_resource_type_id: string | null;
    id: string | null;
    DeleteManuallyManagedAppResourceRequest?: shared.DeleteManuallyManagedAppResourceRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequestToJSON(c1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest: C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest): string;
export declare function c1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteManuallyManagedAppResourceResponse?: shared.DeleteManuallyManagedAppResourceResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponseToJSON(c1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse: C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse): string;
export declare function c1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceDeleteManuallyManagedAppResourceResponse, SDKValidationError>;
