import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PolicyRef message.
 */
export type PolicyRef = {
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const PolicyRef$inboundSchema: z.ZodType<PolicyRef, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const PolicyRef$outboundSchema: z.ZodType<PolicyRef$Outbound, z.ZodTypeDef, PolicyRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyRef$ {
    /** @deprecated use `PolicyRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyRef$Outbound, z.ZodTypeDef, PolicyRef>;
    /** @deprecated use `PolicyRef$Outbound` instead. */
    type Outbound = PolicyRef$Outbound;
}
export declare function policyRefToJSON(policyRef: PolicyRef): string;
export declare function policyRefFromJSON(jsonString: string): SafeParseResult<PolicyRef, SDKValidationError>;
