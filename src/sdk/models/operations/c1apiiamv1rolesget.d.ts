import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1RolesGetRequest = {
    roleId: string | null;
};
export type C1ApiIamV1RolesGetResponse = {
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
     * The GetRolesResponse message contains the retrieved role.
     */
    getRolesResponse?: shared.GetRolesResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesGetRequest$inboundSchema: z.ZodType<C1ApiIamV1RolesGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1RolesGetRequest$Outbound = {
    role_id: string | null;
};
/** @internal */
export declare const C1ApiIamV1RolesGetRequest$outboundSchema: z.ZodType<C1ApiIamV1RolesGetRequest$Outbound, z.ZodTypeDef, C1ApiIamV1RolesGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1RolesGetRequest$ {
    /** @deprecated use `C1ApiIamV1RolesGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1RolesGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1RolesGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1RolesGetRequest$Outbound, z.ZodTypeDef, C1ApiIamV1RolesGetRequest>;
    /** @deprecated use `C1ApiIamV1RolesGetRequest$Outbound` instead. */
    type Outbound = C1ApiIamV1RolesGetRequest$Outbound;
}
export declare function c1ApiIamV1RolesGetRequestToJSON(c1ApiIamV1RolesGetRequest: C1ApiIamV1RolesGetRequest): string;
export declare function c1ApiIamV1RolesGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1RolesGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiIamV1RolesGetResponse$inboundSchema: z.ZodType<C1ApiIamV1RolesGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1RolesGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetRolesResponse?: shared.GetRolesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesGetResponse$outboundSchema: z.ZodType<C1ApiIamV1RolesGetResponse$Outbound, z.ZodTypeDef, C1ApiIamV1RolesGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1RolesGetResponse$ {
    /** @deprecated use `C1ApiIamV1RolesGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1RolesGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1RolesGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1RolesGetResponse$Outbound, z.ZodTypeDef, C1ApiIamV1RolesGetResponse>;
    /** @deprecated use `C1ApiIamV1RolesGetResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1RolesGetResponse$Outbound;
}
export declare function c1ApiIamV1RolesGetResponseToJSON(c1ApiIamV1RolesGetResponse: C1ApiIamV1RolesGetResponse): string;
export declare function c1ApiIamV1RolesGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1RolesGetResponse, SDKValidationError>;
