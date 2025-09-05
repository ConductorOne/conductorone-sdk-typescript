import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ConditionSucceeded message.
 */
export type ConditionSucceeded = {
    succeededAt?: Date | null | undefined;
};
/** @internal */
export declare const ConditionSucceeded$inboundSchema: z.ZodType<ConditionSucceeded, z.ZodTypeDef, unknown>;
/** @internal */
export type ConditionSucceeded$Outbound = {
    succeededAt?: string | null | undefined;
};
/** @internal */
export declare const ConditionSucceeded$outboundSchema: z.ZodType<ConditionSucceeded$Outbound, z.ZodTypeDef, ConditionSucceeded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConditionSucceeded$ {
    /** @deprecated use `ConditionSucceeded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConditionSucceeded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConditionSucceeded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConditionSucceeded$Outbound, z.ZodTypeDef, ConditionSucceeded>;
    /** @deprecated use `ConditionSucceeded$Outbound` instead. */
    type Outbound = ConditionSucceeded$Outbound;
}
export declare function conditionSucceededToJSON(conditionSucceeded: ConditionSucceeded): string;
export declare function conditionSucceededFromJSON(jsonString: string): SafeParseResult<ConditionSucceeded, SDKValidationError>;
