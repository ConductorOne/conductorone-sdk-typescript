import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest = {
    appId: string | null;
    id: string | null;
    deleteManuallyManagedResourceTypeRequest?: shared.DeleteManuallyManagedResourceTypeRequest | undefined;
};
export type C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse = {
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
    deleteManuallyManagedResourceTypeResponse?: shared.DeleteManuallyManagedResourceTypeResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$Outbound = {
    app_id: string | null;
    id: string | null;
    DeleteManuallyManagedResourceTypeRequest?: shared.DeleteManuallyManagedResourceTypeRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequestToJSON(c1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest: C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest): string;
export declare function c1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteManuallyManagedResourceTypeResponse?: shared.DeleteManuallyManagedResourceTypeResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponseToJSON(c1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse: C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse): string;
export declare function c1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse, SDKValidationError>;
