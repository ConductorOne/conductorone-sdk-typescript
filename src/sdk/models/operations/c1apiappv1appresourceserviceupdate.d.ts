import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceServiceUpdateRequest = {
    appId: string | null;
    appResourceTypeId: string | null;
    id: string | null;
    appResourceServiceUpdateRequest?: shared.AppResourceServiceUpdateRequest | undefined;
};
export type C1ApiAppV1AppResourceServiceUpdateResponse = {
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
    appResourceServiceUpdateResponse?: shared.AppResourceServiceUpdateResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceUpdateRequest$Outbound = {
    app_id: string | null;
    app_resource_type_id: string | null;
    id: string | null;
    AppResourceServiceUpdateRequest?: shared.AppResourceServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceUpdateRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceUpdateRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceUpdateRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceUpdateRequestToJSON(c1ApiAppV1AppResourceServiceUpdateRequest: C1ApiAppV1AppResourceServiceUpdateRequest): string;
export declare function c1ApiAppV1AppResourceServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppResourceServiceUpdateResponse?: shared.AppResourceServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceUpdateResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceUpdateResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceUpdateResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceUpdateResponseToJSON(c1ApiAppV1AppResourceServiceUpdateResponse: C1ApiAppV1AppResourceServiceUpdateResponse): string;
export declare function c1ApiAppV1AppResourceServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceUpdateResponse, SDKValidationError>;
