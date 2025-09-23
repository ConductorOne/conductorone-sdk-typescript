import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceOwnersAddRequest = {
    appId: string | null;
    resourceTypeId: string | null;
    resourceId: string | null;
    addAppResourceOwnerRequest?: shared.AddAppResourceOwnerRequest | undefined;
};
export type C1ApiAppV1AppResourceOwnersAddResponse = {
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
    addAppResourceOwnerResponse?: shared.AddAppResourceOwnerResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersAddRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceOwnersAddRequest$Outbound = {
    app_id: string | null;
    resource_type_id: string | null;
    resource_id: string | null;
    AddAppResourceOwnerRequest?: shared.AddAppResourceOwnerRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersAddRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersAddRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceOwnersAddRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceOwnersAddRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersAddRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersAddRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersAddRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceOwnersAddRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceOwnersAddRequestToJSON(c1ApiAppV1AppResourceOwnersAddRequest: C1ApiAppV1AppResourceOwnersAddRequest): string;
export declare function c1ApiAppV1AppResourceOwnersAddRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceOwnersAddRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersAddResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceOwnersAddResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AddAppResourceOwnerResponse?: shared.AddAppResourceOwnerResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceOwnersAddResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersAddResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceOwnersAddResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceOwnersAddResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersAddResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceOwnersAddResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceOwnersAddResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceOwnersAddResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceOwnersAddResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceOwnersAddResponseToJSON(c1ApiAppV1AppResourceOwnersAddResponse: C1ApiAppV1AppResourceOwnersAddResponse): string;
export declare function c1ApiAppV1AppResourceOwnersAddResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceOwnersAddResponse, SDKValidationError>;
