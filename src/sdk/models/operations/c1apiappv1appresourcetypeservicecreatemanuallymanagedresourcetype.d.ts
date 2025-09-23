import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest = {
    appId: string | null;
    createManuallyManagedResourceTypeRequest?: shared.CreateManuallyManagedResourceTypeRequest | undefined;
};
export type C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse = {
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
    createManuallyManagedResourceTypeResponse?: shared.CreateManuallyManagedResourceTypeResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$Outbound = {
    app_id: string | null;
    CreateManuallyManagedResourceTypeRequest?: shared.CreateManuallyManagedResourceTypeRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequestToJSON(c1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest: C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest): string;
export declare function c1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateManuallyManagedResourceTypeResponse?: shared.CreateManuallyManagedResourceTypeResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponseToJSON(c1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse: C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse): string;
export declare function c1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceCreateManuallyManagedResourceTypeResponse, SDKValidationError>;
