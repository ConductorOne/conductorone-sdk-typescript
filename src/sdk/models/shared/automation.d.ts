import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationContext, AutomationContext$Outbound } from "./automationcontext.js";
import { AutomationStep, AutomationStep$Outbound } from "./automationstep.js";
import { AutomationTrigger, AutomationTrigger$Outbound } from "./automationtrigger.js";
import { DisabledReasonCircuitBreaker, DisabledReasonCircuitBreaker$Outbound } from "./disabledreasoncircuitbreaker.js";
/**
 * The primaryTriggerType field.
 */
export declare const PrimaryTriggerType: {
    readonly TriggerTypeUnspecified: "TRIGGER_TYPE_UNSPECIFIED";
    readonly TriggerTypeUserProfileChange: "TRIGGER_TYPE_USER_PROFILE_CHANGE";
    readonly TriggerTypeAppUserCreate: "TRIGGER_TYPE_APP_USER_CREATE";
    readonly TriggerTypeAppUserUpdate: "TRIGGER_TYPE_APP_USER_UPDATE";
    readonly TriggerTypeUnusedAccess: "TRIGGER_TYPE_UNUSED_ACCESS";
    readonly TriggerTypeUserCreated: "TRIGGER_TYPE_USER_CREATED";
    readonly TriggerTypeGrantFound: "TRIGGER_TYPE_GRANT_FOUND";
    readonly TriggerTypeGrantDeleted: "TRIGGER_TYPE_GRANT_DELETED";
    readonly TriggerTypeWebhook: "TRIGGER_TYPE_WEBHOOK";
    readonly TriggerTypeSchedule: "TRIGGER_TYPE_SCHEDULE";
    readonly TriggerTypeForm: "TRIGGER_TYPE_FORM";
};
/**
 * The primaryTriggerType field.
 */
export type PrimaryTriggerType = OpenEnum<typeof PrimaryTriggerType>;
/**
 * The Automation message.
 *
 * @remarks
 *
 * This message contains a oneof named disabled_reason. Only a single field of the following list may be set at a time:
 *   - circuitBreaker
 */
export type Automation = {
    /**
     * the app id this workflow_template belongs to
     */
    appId?: string | null | undefined;
    /**
     * The automationSteps field.
     */
    automationSteps?: Array<AutomationStep> | null | undefined;
    circuitBreaker?: DisabledReasonCircuitBreaker | null | undefined;
    context?: AutomationContext | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The currentVersion field.
     */
    currentVersion?: number | null | undefined;
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
     * The id field.
     */
    id?: string | null | undefined;
    /**
     * The isDraft field.
     */
    isDraft?: boolean | null | undefined;
    lastExecutedAt?: Date | null | undefined;
    /**
     * The primaryTriggerType field.
     */
    primaryTriggerType?: PrimaryTriggerType | null | undefined;
    /**
     * The triggers field.
     */
    triggers?: Array<AutomationTrigger> | null | undefined;
};
/**
 * The Automation message.
 *
 * @remarks
 *
 * This message contains a oneof named disabled_reason. Only a single field of the following list may be set at a time:
 *   - circuitBreaker
 */
export type AutomationInput = {
    /**
     * the app id this workflow_template belongs to
     */
    appId?: string | null | undefined;
    /**
     * The automationSteps field.
     */
    automationSteps?: Array<AutomationStep> | null | undefined;
    circuitBreaker?: DisabledReasonCircuitBreaker | null | undefined;
    context?: AutomationContext | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The currentVersion field.
     */
    currentVersion?: number | null | undefined;
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
    lastExecutedAt?: Date | null | undefined;
    /**
     * The primaryTriggerType field.
     */
    primaryTriggerType?: PrimaryTriggerType | null | undefined;
    /**
     * The triggers field.
     */
    triggers?: Array<AutomationTrigger> | null | undefined;
};
/** @internal */
export declare const PrimaryTriggerType$inboundSchema: z.ZodType<PrimaryTriggerType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PrimaryTriggerType$outboundSchema: z.ZodType<PrimaryTriggerType, z.ZodTypeDef, PrimaryTriggerType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PrimaryTriggerType$ {
    /** @deprecated use `PrimaryTriggerType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PrimaryTriggerType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PrimaryTriggerType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PrimaryTriggerType, z.ZodTypeDef, PrimaryTriggerType>;
}
/** @internal */
export declare const Automation$inboundSchema: z.ZodType<Automation, z.ZodTypeDef, unknown>;
/** @internal */
export type Automation$Outbound = {
    appId?: string | null | undefined;
    automationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    circuitBreaker?: DisabledReasonCircuitBreaker$Outbound | null | undefined;
    context?: AutomationContext$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    currentVersion?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    draftAutomationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    draftTriggers?: Array<AutomationTrigger$Outbound> | null | undefined;
    enabled?: boolean | null | undefined;
    id?: string | null | undefined;
    isDraft?: boolean | null | undefined;
    lastExecutedAt?: string | null | undefined;
    primaryTriggerType?: string | null | undefined;
    triggers?: Array<AutomationTrigger$Outbound> | null | undefined;
};
/** @internal */
export declare const Automation$outboundSchema: z.ZodType<Automation$Outbound, z.ZodTypeDef, Automation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Automation$ {
    /** @deprecated use `Automation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Automation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Automation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Automation$Outbound, z.ZodTypeDef, Automation>;
    /** @deprecated use `Automation$Outbound` instead. */
    type Outbound = Automation$Outbound;
}
export declare function automationToJSON(automation: Automation): string;
export declare function automationFromJSON(jsonString: string): SafeParseResult<Automation, SDKValidationError>;
/** @internal */
export declare const AutomationInput$inboundSchema: z.ZodType<AutomationInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationInput$Outbound = {
    appId?: string | null | undefined;
    automationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    circuitBreaker?: DisabledReasonCircuitBreaker$Outbound | null | undefined;
    context?: AutomationContext$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    currentVersion?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    draftAutomationSteps?: Array<AutomationStep$Outbound> | null | undefined;
    draftTriggers?: Array<AutomationTrigger$Outbound> | null | undefined;
    enabled?: boolean | null | undefined;
    isDraft?: boolean | null | undefined;
    lastExecutedAt?: string | null | undefined;
    primaryTriggerType?: string | null | undefined;
    triggers?: Array<AutomationTrigger$Outbound> | null | undefined;
};
/** @internal */
export declare const AutomationInput$outboundSchema: z.ZodType<AutomationInput$Outbound, z.ZodTypeDef, AutomationInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationInput$ {
    /** @deprecated use `AutomationInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationInput$Outbound, z.ZodTypeDef, AutomationInput>;
    /** @deprecated use `AutomationInput$Outbound` instead. */
    type Outbound = AutomationInput$Outbound;
}
export declare function automationInputToJSON(automationInput: AutomationInput): string;
export declare function automationInputFromJSON(jsonString: string): SafeParseResult<AutomationInput, SDKValidationError>;
