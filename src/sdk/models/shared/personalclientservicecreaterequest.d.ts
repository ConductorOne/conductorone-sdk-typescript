import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PersonalClientServiceCreateRequest message contains the fields for creating a new personal client.
 */
export type PersonalClientServiceCreateRequest = {
    /**
     * A list of CIDRs to restrict this credential to.
     */
    allowSourceCidr?: Array<string> | null | undefined;
    /**
     * The display name for the new personal client.
     */
    displayName?: string | null | undefined;
    expires?: string | null | undefined;
    /**
     * The list of roles to restrict the credential to.
     */
    scopedRoles?: Array<string> | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceCreateRequest$inboundSchema: z.ZodType<PersonalClientServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceCreateRequest$Outbound = {
    allowSourceCidr?: Array<string> | null | undefined;
    displayName?: string | null | undefined;
    expires?: string | null | undefined;
    scopedRoles?: Array<string> | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceCreateRequest$outboundSchema: z.ZodType<PersonalClientServiceCreateRequest$Outbound, z.ZodTypeDef, PersonalClientServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceCreateRequest$ {
    /** @deprecated use `PersonalClientServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceCreateRequest$Outbound, z.ZodTypeDef, PersonalClientServiceCreateRequest>;
    /** @deprecated use `PersonalClientServiceCreateRequest$Outbound` instead. */
    type Outbound = PersonalClientServiceCreateRequest$Outbound;
}
export declare function personalClientServiceCreateRequestToJSON(personalClientServiceCreateRequest: PersonalClientServiceCreateRequest): string;
export declare function personalClientServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceCreateRequest, SDKValidationError>;
