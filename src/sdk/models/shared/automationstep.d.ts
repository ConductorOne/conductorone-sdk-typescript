import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CallFunction, CallFunction$Outbound } from "./callfunction.js";
import { ConnectorAction, ConnectorAction$Outbound } from "./connectoraction.js";
import { ConnectorCreateAccount, ConnectorCreateAccount$Outbound } from "./connectorcreateaccount.js";
import { CreateAccessReview, CreateAccessReview$Outbound } from "./createaccessreview.js";
import { CreateRevokeTasks, CreateRevokeTasks$Outbound } from "./createrevoketasks.js";
import { GrantEntitlements, GrantEntitlements$Outbound } from "./grantentitlements.js";
import { RemoveFromDelegation, RemoveFromDelegation$Outbound } from "./removefromdelegation.js";
import { RunAutomation, RunAutomation$Outbound } from "./runautomation.js";
import { SendEmail, SendEmail$Outbound } from "./sendemail.js";
import { SendSlackMessage, SendSlackMessage$Outbound } from "./sendslackmessage.js";
import { TaskAction, TaskAction$Outbound } from "./taskaction.js";
import { UnenrollFromAllAccessProfiles, UnenrollFromAllAccessProfiles$Outbound } from "./unenrollfromallaccessprofiles.js";
import { UpdateUser, UpdateUser$Outbound } from "./updateuser.js";
import { WaitForDuration, WaitForDuration$Outbound } from "./waitforduration.js";
import { Webhook, Webhook$Outbound } from "./webhook.js";
/**
 * The AutomationStep message.
 *
 * @remarks
 *
 * This message contains a oneof named kind. Only a single field of the following list may be set at a time:
 *   - createAccessReview
 *   - waitForDuration
 *   - unenrollFromAllAccessProfiles
 *   - createRevokeTasks
 *   - sendEmail
 *   - removeFromDelegation
 *   - runAutomation
 *   - updateUser
 *   - taskAction
 *   - webhook
 *   - connectorAction
 *   - connectorCreateAccount
 *   - grantEntitlements
 *   - sendSlackMessage
 *   - callFunction
 */
export type AutomationStep = {
    callFunction?: CallFunction | null | undefined;
    connectorAction?: ConnectorAction | null | undefined;
    connectorCreateAccount?: ConnectorCreateAccount | null | undefined;
    createAccessReview?: CreateAccessReview | null | undefined;
    createRevokeTasks?: CreateRevokeTasks | null | undefined;
    grantEntitlements?: GrantEntitlements | null | undefined;
    removeFromDelegation?: RemoveFromDelegation | null | undefined;
    runAutomation?: RunAutomation | null | undefined;
    sendEmail?: SendEmail | null | undefined;
    sendSlackMessage?: SendSlackMessage | null | undefined;
    /**
     * The skipIfTrueCel field.
     */
    skipIfTrueCel?: string | null | undefined;
    /**
     * The stepDisplayName field.
     */
    stepDisplayName?: string | null | undefined;
    /**
     * The stepName field.
     */
    stepName?: string | null | undefined;
    taskAction?: TaskAction | null | undefined;
    unenrollFromAllAccessProfiles?: UnenrollFromAllAccessProfiles | null | undefined;
    updateUser?: UpdateUser | null | undefined;
    waitForDuration?: WaitForDuration | null | undefined;
    webhook?: Webhook | null | undefined;
};
/** @internal */
export declare const AutomationStep$inboundSchema: z.ZodType<AutomationStep, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationStep$Outbound = {
    callFunction?: CallFunction$Outbound | null | undefined;
    connectorAction?: ConnectorAction$Outbound | null | undefined;
    connectorCreateAccount?: ConnectorCreateAccount$Outbound | null | undefined;
    createAccessReview?: CreateAccessReview$Outbound | null | undefined;
    createRevokeTasks?: CreateRevokeTasks$Outbound | null | undefined;
    grantEntitlements?: GrantEntitlements$Outbound | null | undefined;
    removeFromDelegation?: RemoveFromDelegation$Outbound | null | undefined;
    runAutomation?: RunAutomation$Outbound | null | undefined;
    sendEmail?: SendEmail$Outbound | null | undefined;
    sendSlackMessage?: SendSlackMessage$Outbound | null | undefined;
    skipIfTrueCel?: string | null | undefined;
    stepDisplayName?: string | null | undefined;
    stepName?: string | null | undefined;
    taskAction?: TaskAction$Outbound | null | undefined;
    unenrollFromAllAccessProfiles?: UnenrollFromAllAccessProfiles$Outbound | null | undefined;
    updateUser?: UpdateUser$Outbound | null | undefined;
    waitForDuration?: WaitForDuration$Outbound | null | undefined;
    webhook?: Webhook$Outbound | null | undefined;
};
/** @internal */
export declare const AutomationStep$outboundSchema: z.ZodType<AutomationStep$Outbound, z.ZodTypeDef, AutomationStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationStep$ {
    /** @deprecated use `AutomationStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationStep$Outbound, z.ZodTypeDef, AutomationStep>;
    /** @deprecated use `AutomationStep$Outbound` instead. */
    type Outbound = AutomationStep$Outbound;
}
export declare function automationStepToJSON(automationStep: AutomationStep): string;
export declare function automationStepFromJSON(jsonString: string): SafeParseResult<AutomationStep, SDKValidationError>;
