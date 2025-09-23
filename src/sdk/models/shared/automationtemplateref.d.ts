import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AutomationTemplateRef message.
 */
export type AutomationTemplateRef = {
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const AutomationTemplateRef$inboundSchema: z.ZodType<AutomationTemplateRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationTemplateRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const AutomationTemplateRef$outboundSchema: z.ZodType<AutomationTemplateRef$Outbound, z.ZodTypeDef, AutomationTemplateRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationTemplateRef$ {
    /** @deprecated use `AutomationTemplateRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationTemplateRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationTemplateRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationTemplateRef$Outbound, z.ZodTypeDef, AutomationTemplateRef>;
    /** @deprecated use `AutomationTemplateRef$Outbound` instead. */
    type Outbound = AutomationTemplateRef$Outbound;
}
export declare function automationTemplateRefToJSON(automationTemplateRef: AutomationTemplateRef): string;
export declare function automationTemplateRefFromJSON(jsonString: string): SafeParseResult<AutomationTemplateRef, SDKValidationError>;
