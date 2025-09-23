import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationStep, AutomationStep$Outbound } from "./automationstep.js";
import { AutomationTrigger, AutomationTrigger$Outbound } from "./automationtrigger.js";
/**
 * The AutomationTemplateVersion message.
 */
export type AutomationTemplateVersion = {
    /**
     * The automationSteps field.
     */
    automationSteps?: Array<AutomationStep> | null | undefined;
    /**
     * The automationTemplateId field.
     */
    automationTemplateId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The triggers field.
     */
    triggers?: Array<AutomationTrigger> | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The version field.
     */
    version?: number | null | undefined;
};
/** @internal */
export declare const AutomationTemplateVersion$inboundSchema: z.ZodType<AutomationTemplateVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationTemplateVersion$Outbound = {
    automationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    automationTemplateId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    triggers?: Array<AutomationTrigger$Outbound> | null | undefined;
    updatedAt?: string | null | undefined;
    version?: string | null | undefined;
};
/** @internal */
export declare const AutomationTemplateVersion$outboundSchema: z.ZodType<AutomationTemplateVersion$Outbound, z.ZodTypeDef, AutomationTemplateVersion>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationTemplateVersion$ {
    /** @deprecated use `AutomationTemplateVersion$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationTemplateVersion, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationTemplateVersion$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationTemplateVersion$Outbound, z.ZodTypeDef, AutomationTemplateVersion>;
    /** @deprecated use `AutomationTemplateVersion$Outbound` instead. */
    type Outbound = AutomationTemplateVersion$Outbound;
}
export declare function automationTemplateVersionToJSON(automationTemplateVersion: AutomationTemplateVersion): string;
export declare function automationTemplateVersionFromJSON(jsonString: string): SafeParseResult<AutomationTemplateVersion, SDKValidationError>;
