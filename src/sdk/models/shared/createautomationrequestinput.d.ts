import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationContext, AutomationContext$Outbound } from "./automationcontext.js";
import { AutomationStep, AutomationStep$Outbound } from "./automationstep.js";
import { AutomationTrigger, AutomationTrigger$Outbound } from "./automationtrigger.js";
/**
 * The CreateAutomationRequest message.
 */
export type CreateAutomationRequestInput = {
    /**
     * the app id this workflow_template belongs to
     */
    appId?: string | null | undefined;
    /**
     * The automationSteps field.
     */
    automationSteps?: Array<AutomationStep> | null | undefined;
    context?: AutomationContext | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The draftAutomationSteps field.
     */
    draftAutomationSteps?: Array<AutomationStep> | null | undefined;
    /**
     * The draftTriggers field.
     */
    draftTriggers?: Array<AutomationTrigger> | null | undefined;
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    /**
     * The isDraft field.
     */
    isDraft?: boolean | null | undefined;
    /**
     * The triggers field.
     */
    triggers?: Array<AutomationTrigger> | null | undefined;
};
/** @internal */
export declare const CreateAutomationRequestInput$inboundSchema: z.ZodType<CreateAutomationRequestInput, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAutomationRequestInput$Outbound = {
    appId?: string | null | undefined;
    automationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    context?: AutomationContext$Outbound | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    draftAutomationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    draftTriggers?: Array<AutomationTrigger$Outbound> | null | undefined;
    enabled?: boolean | null | undefined;
    isDraft?: boolean | null | undefined;
    triggers?: Array<AutomationTrigger$Outbound> | null | undefined;
};
/** @internal */
export declare const CreateAutomationRequestInput$outboundSchema: z.ZodType<CreateAutomationRequestInput$Outbound, z.ZodTypeDef, CreateAutomationRequestInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAutomationRequestInput$ {
    /** @deprecated use `CreateAutomationRequestInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAutomationRequestInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAutomationRequestInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAutomationRequestInput$Outbound, z.ZodTypeDef, CreateAutomationRequestInput>;
    /** @deprecated use `CreateAutomationRequestInput$Outbound` instead. */
    type Outbound = CreateAutomationRequestInput$Outbound;
}
export declare function createAutomationRequestInputToJSON(createAutomationRequestInput: CreateAutomationRequestInput): string;
export declare function createAutomationRequestInputFromJSON(jsonString: string): SafeParseResult<CreateAutomationRequestInput, SDKValidationError>;
