import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationContext, AutomationContext$Outbound } from "./automationcontext.js";
import { AutomationTemplateRef, AutomationTemplateRef$Outbound } from "./automationtemplateref.js";
/**
 * RunAutomation: kick off the execution of an automation template.
 *
 * @remarks
 *
 * This message contains a oneof named automation_template. Only a single field of the following list may be set at a time:
 *   - automationTemplateRef
 *   - automationTemplateIdCel
 */
export type RunAutomation = {
    /**
     * The automationTemplateIdCel field.
     *
     * @remarks
     * This field is part of the `automation_template` oneof.
     * See the documentation for `c1.api.automations.v1.RunAutomation` for more details.
     */
    automationTemplateIdCel?: string | null | undefined;
    automationTemplateRef?: AutomationTemplateRef | null | undefined;
    context?: AutomationContext | null | undefined;
};
/** @internal */
export declare const RunAutomation$inboundSchema: z.ZodType<RunAutomation, z.ZodTypeDef, unknown>;
/** @internal */
export type RunAutomation$Outbound = {
    automationTemplateIdCel?: string | null | undefined;
    automationTemplateRef?: AutomationTemplateRef$Outbound | null | undefined;
    context?: AutomationContext$Outbound | null | undefined;
};
/** @internal */
export declare const RunAutomation$outboundSchema: z.ZodType<RunAutomation$Outbound, z.ZodTypeDef, RunAutomation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RunAutomation$ {
    /** @deprecated use `RunAutomation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RunAutomation, z.ZodTypeDef, unknown>;
    /** @deprecated use `RunAutomation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RunAutomation$Outbound, z.ZodTypeDef, RunAutomation>;
    /** @deprecated use `RunAutomation$Outbound` instead. */
    type Outbound = RunAutomation$Outbound;
}
export declare function runAutomationToJSON(runAutomation: RunAutomation): string;
export declare function runAutomationFromJSON(jsonString: string): SafeParseResult<RunAutomation, SDKValidationError>;
