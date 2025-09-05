import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppOwnersAddRequest = {
    appId: string | null;
    userId: string | null;
    addAppOwnerRequest?: shared.AddAppOwnerRequest | undefined;
};
export type C1ApiAppV1AppOwnersAddResponse = {
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
     * Empty response with a status code indicating success
     */
    addAppOwnerResponse?: shared.AddAppOwnerResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersAddRequest$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersAddRequest$Outbound = {
    app_id: string | null;
    user_id: string | null;
    AddAppOwnerRequest?: shared.AddAppOwnerRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersAddRequest$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersAddRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersAddRequest$ {
    /** @deprecated use `C1ApiAppV1AppOwnersAddRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersAddRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersAddRequest>;
    /** @deprecated use `C1ApiAppV1AppOwnersAddRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersAddRequest$Outbound;
}
export declare function c1ApiAppV1AppOwnersAddRequestToJSON(c1ApiAppV1AppOwnersAddRequest: C1ApiAppV1AppOwnersAddRequest): string;
export declare function c1ApiAppV1AppOwnersAddRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersAddRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppOwnersAddResponse$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersAddResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AddAppOwnerResponse?: shared.AddAppOwnerResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersAddResponse$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersAddResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersAddResponse$ {
    /** @deprecated use `C1ApiAppV1AppOwnersAddResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersAddResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersAddResponse>;
    /** @deprecated use `C1ApiAppV1AppOwnersAddResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersAddResponse$Outbound;
}
export declare function c1ApiAppV1AppOwnersAddResponseToJSON(c1ApiAppV1AppOwnersAddResponse: C1ApiAppV1AppOwnersAddResponse): string;
export declare function c1ApiAppV1AppOwnersAddResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersAddResponse, SDKValidationError>;
