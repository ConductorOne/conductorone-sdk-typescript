import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceOwnersRemoveRequest = {
    appId: string | null;
    resourceTypeId: string | null;
    resourceId: string | null;
    removeAppResourceOwnerRequest?: shared.RemoveAppResourceOwnerRequest | undefined;
};
export type C1ApiAppV1AppResourceOwnersRemoveResponse = {
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
    removeAppResourceOwnerResponse?: shared.RemoveAppResourceOwnerResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersRemoveRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceOwnersRemoveRequest$Outbound = {
    app_id: string | null;
    resource_type_id: string | null;
    resource_id: string | null;
    RemoveAppResourceOwnerRequest?: shared.RemoveAppResourceOwnerRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersRemoveRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersRemoveRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceOwnersRemoveRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceOwnersRemoveRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersRemoveRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersRemoveRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersRemoveRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceOwnersRemoveRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceOwnersRemoveRequestToJSON(c1ApiAppV1AppResourceOwnersRemoveRequest: C1ApiAppV1AppResourceOwnersRemoveRequest): string;
export declare function c1ApiAppV1AppResourceOwnersRemoveRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceOwnersRemoveRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersRemoveResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceOwnersRemoveResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RemoveAppResourceOwnerResponse?: shared.RemoveAppResourceOwnerResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersRemoveResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersRemoveResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceOwnersRemoveResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceOwnersRemoveResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersRemoveResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersRemoveResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersRemoveResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersRemoveResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceOwnersRemoveResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceOwnersRemoveResponseToJSON(c1ApiAppV1AppResourceOwnersRemoveResponse: C1ApiAppV1AppResourceOwnersRemoveResponse): string;
export declare function c1ApiAppV1AppResourceOwnersRemoveResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceOwnersRemoveResponse, SDKValidationError>;
