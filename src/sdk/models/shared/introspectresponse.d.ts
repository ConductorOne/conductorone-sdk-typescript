import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * IntrospectResponse contains information about the current user who is authenticated.
 */
export type IntrospectResponse = {
    /**
     * The list of feature flags enabled for the tenant the logged in user belongs to.
     */
    features?: Array<string> | null | undefined;
    /**
     * The list of permissions that the current logged in user has.
     */
    permissions?: Array<string> | null | undefined;
    /**
     * The principleID of the current logged in user.
     */
    principleId?: string | null | undefined;
    /**
     * The list of roles that the current logged in user has.
     */
    roles?: Array<string> | null | undefined;
    /**
     * The userID of the current logged in user.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const IntrospectResponse$inboundSchema: z.ZodType<IntrospectResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IntrospectResponse$Outbound = {
    features?: Array<string> | null | undefined;
    permissions?: Array<string> | null | undefined;
    principleId?: string | null | undefined;
    roles?: Array<string> | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const IntrospectResponse$outboundSchema: z.ZodType<IntrospectResponse$Outbound, z.ZodTypeDef, IntrospectResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IntrospectResponse$ {
    /** @deprecated use `IntrospectResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IntrospectResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IntrospectResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IntrospectResponse$Outbound, z.ZodTypeDef, IntrospectResponse>;
    /** @deprecated use `IntrospectResponse$Outbound` instead. */
    type Outbound = IntrospectResponse$Outbound;
}
export declare function introspectResponseToJSON(introspectResponse: IntrospectResponse): string;
export declare function introspectResponseFromJSON(jsonString: string): SafeParseResult<IntrospectResponse, SDKValidationError>;
