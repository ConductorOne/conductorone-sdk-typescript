import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The Rule message.
 */
export type Rule = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
    /**
     * This is a reference to a list of policy steps from `policy_steps`
     */
    policyKey?: string | null | undefined;
};
/** @internal */
export declare const Rule$inboundSchema: z.ZodType<Rule, z.ZodTypeDef, unknown>;
/** @internal */
export type Rule$Outbound = {
    condition?: string | null | undefined;
    policyKey?: string | null | undefined;
};
/** @internal */
export declare const Rule$outboundSchema: z.ZodType<Rule$Outbound, z.ZodTypeDef, Rule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Rule$ {
    /** @deprecated use `Rule$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Rule, z.ZodTypeDef, unknown>;
    /** @deprecated use `Rule$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Rule$Outbound, z.ZodTypeDef, Rule>;
    /** @deprecated use `Rule$Outbound` instead. */
    type Outbound = Rule$Outbound;
}
export declare function ruleToJSON(rule: Rule): string;
export declare function ruleFromJSON(jsonString: string): SafeParseResult<Rule, SDKValidationError>;
