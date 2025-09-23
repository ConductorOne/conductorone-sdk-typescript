import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AutomationContext message.
 */
export type AutomationContext = {
    context?: {
        [k: string]: any;
    } | null | undefined;
};
/** @internal */
export declare const AutomationContext$inboundSchema: z.ZodType<AutomationContext, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationContext$Outbound = {
    context?: {
        [k: string]: any;
    } | null | undefined;
};
/** @internal */
export declare const AutomationContext$outboundSchema: z.ZodType<AutomationContext$Outbound, z.ZodTypeDef, AutomationContext>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationContext$ {
    /** @deprecated use `AutomationContext$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationContext, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationContext$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationContext$Outbound, z.ZodTypeDef, AutomationContext>;
    /** @deprecated use `AutomationContext$Outbound` instead. */
    type Outbound = AutomationContext$Outbound;
}
export declare function automationContextToJSON(automationContext: AutomationContext): string;
export declare function automationContextFromJSON(jsonString: string): SafeParseResult<AutomationContext, SDKValidationError>;
