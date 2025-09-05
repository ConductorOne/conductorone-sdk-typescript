import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest = {
    appId: string | null;
    id: string | null;
    updateManuallyManagedResourceTypeRequest?: shared.UpdateManuallyManagedResourceTypeRequest | undefined;
};
export type C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse = {
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
    updateManuallyManagedResourceTypeResponse?: shared.UpdateManuallyManagedResourceTypeResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$Outbound = {
    app_id: string | null;
    id: string | null;
    UpdateManuallyManagedResourceTypeRequest?: shared.UpdateManuallyManagedResourceTypeRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequestToJSON(c1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest: C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest): string;
export declare function c1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateManuallyManagedResourceTypeResponse?: shared.UpdateManuallyManagedResourceTypeResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponseToJSON(c1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse: C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse): string;
export declare function c1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceUpdateManuallyManagedResourceTypeResponse, SDKValidationError>;
