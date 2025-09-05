import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppOwnersRemoveRequest = {
    appId: string | null;
    userId: string | null;
    removeAppOwnerRequest?: shared.RemoveAppOwnerRequest | undefined;
};
export type C1ApiAppV1AppOwnersRemoveResponse = {
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
     * Empty response with a status code indicating success.
     */
    removeAppOwnerResponse?: shared.RemoveAppOwnerResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersRemoveRequest$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersRemoveRequest$Outbound = {
    app_id: string | null;
    user_id: string | null;
    RemoveAppOwnerRequest?: shared.RemoveAppOwnerRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersRemoveRequest$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersRemoveRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersRemoveRequest$ {
    /** @deprecated use `C1ApiAppV1AppOwnersRemoveRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersRemoveRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersRemoveRequest>;
    /** @deprecated use `C1ApiAppV1AppOwnersRemoveRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersRemoveRequest$Outbound;
}
export declare function c1ApiAppV1AppOwnersRemoveRequestToJSON(c1ApiAppV1AppOwnersRemoveRequest: C1ApiAppV1AppOwnersRemoveRequest): string;
export declare function c1ApiAppV1AppOwnersRemoveRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersRemoveRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppOwnersRemoveResponse$inboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppOwnersRemoveResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RemoveAppOwnerResponse?: shared.RemoveAppOwnerResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppOwnersRemoveResponse$outboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersRemoveResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppOwnersRemoveResponse$ {
    /** @deprecated use `C1ApiAppV1AppOwnersRemoveResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppOwnersRemoveResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppOwnersRemoveResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersRemoveResponse>;
    /** @deprecated use `C1ApiAppV1AppOwnersRemoveResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppOwnersRemoveResponse$Outbound;
}
export declare function c1ApiAppV1AppOwnersRemoveResponseToJSON(c1ApiAppV1AppOwnersRemoveResponse: C1ApiAppV1AppOwnersRemoveResponse): string;
export declare function c1ApiAppV1AppOwnersRemoveResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppOwnersRemoveResponse, SDKValidationError>;
