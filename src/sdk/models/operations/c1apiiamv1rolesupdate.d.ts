import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1RolesUpdateRequest = {
    roleId: string | null;
    updateRoleRequest?: shared.UpdateRoleRequest | undefined;
};
export type C1ApiIamV1RolesUpdateResponse = {
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
     * UpdateRolesResponse is the response message containing the updated role.
     */
    updateRolesResponse?: shared.UpdateRolesResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesUpdateRequest$inboundSchema: z.ZodType<C1ApiIamV1RolesUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1RolesUpdateRequest$Outbound = {
    role_id: string | null;
    UpdateRoleRequest?: shared.UpdateRoleRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesUpdateRequest$outboundSchema: z.ZodType<C1ApiIamV1RolesUpdateRequest$Outbound, z.ZodTypeDef, C1ApiIamV1RolesUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1RolesUpdateRequest$ {
    /** @deprecated use `C1ApiIamV1RolesUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1RolesUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1RolesUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1RolesUpdateRequest$Outbound, z.ZodTypeDef, C1ApiIamV1RolesUpdateRequest>;
    /** @deprecated use `C1ApiIamV1RolesUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiIamV1RolesUpdateRequest$Outbound;
}
export declare function c1ApiIamV1RolesUpdateRequestToJSON(c1ApiIamV1RolesUpdateRequest: C1ApiIamV1RolesUpdateRequest): string;
export declare function c1ApiIamV1RolesUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1RolesUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiIamV1RolesUpdateResponse$inboundSchema: z.ZodType<C1ApiIamV1RolesUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1RolesUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateRolesResponse?: shared.UpdateRolesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1RolesUpdateResponse$outboundSchema: z.ZodType<C1ApiIamV1RolesUpdateResponse$Outbound, z.ZodTypeDef, C1ApiIamV1RolesUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1RolesUpdateResponse$ {
    /** @deprecated use `C1ApiIamV1RolesUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1RolesUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1RolesUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1RolesUpdateResponse$Outbound, z.ZodTypeDef, C1ApiIamV1RolesUpdateResponse>;
    /** @deprecated use `C1ApiIamV1RolesUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1RolesUpdateResponse$Outbound;
}
export declare function c1ApiIamV1RolesUpdateResponseToJSON(c1ApiIamV1RolesUpdateResponse: C1ApiIamV1RolesUpdateResponse): string;
export declare function c1ApiIamV1RolesUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1RolesUpdateResponse, SDKValidationError>;
