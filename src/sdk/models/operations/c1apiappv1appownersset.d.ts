import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppOwnersSetRequest = {
    appId: string | null;
    setAppOwnersRequest?: shared.SetAppOwnersRequest | undefined;
};
export type C1ApiAppV1AppOwnersSetResponse = {
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
     * The empty response message for setting the app owners.
     */
    setAppOwnersResponse?: shared.SetAppOwnersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersSetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersSetRequest$Outbound = {
    app_id: string | null;
    SetAppOwnersRequest?: shared.SetAppOwnersRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersSetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersSetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersSetRequest$ {
    /** @deprecated use `C1ApiAppV1AppOwnersSetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersSetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersSetRequest>;
    /** @deprecated use `C1ApiAppV1AppOwnersSetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersSetRequest$Outbound;
}
export declare function c1ApiAppV1AppOwnersSetRequestToJSON(c1ApiAppV1AppOwnersSetRequest: C1ApiAppV1AppOwnersSetRequest): string;
export declare function c1ApiAppV1AppOwnersSetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersSetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppOwnersSetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersSetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SetAppOwnersResponse?: shared.SetAppOwnersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersSetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersSetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersSetResponse$ {
    /** @deprecated use `C1ApiAppV1AppOwnersSetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersSetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersSetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersSetResponse>;
    /** @deprecated use `C1ApiAppV1AppOwnersSetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersSetResponse$Outbound;
}
export declare function c1ApiAppV1AppOwnersSetResponseToJSON(c1ApiAppV1AppOwnersSetResponse: C1ApiAppV1AppOwnersSetResponse): string;
export declare function c1ApiAppV1AppOwnersSetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersSetResponse, SDKValidationError>;
