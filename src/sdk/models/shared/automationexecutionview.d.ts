import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationExecution, AutomationExecution$Outbound } from "./automationexecution.js";
/**
 * The AutomationExecutionView message.
 */
export type AutomationExecutionView = {
    automationExecution?: AutomationExecution | null | undefined;
    /**
     * The automationExecutionTriggerPath field.
     */
    automationExecutionTriggerPath?: string | null | undefined;
    /**
     * The automationPath field.
     */
    automationPath?: string | null | undefined;
};
/** @internal */
export declare const AutomationExecutionView$inboundSchema: z.ZodType<AutomationExecutionView, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationExecutionView$Outbound = {
    automationExecution?: AutomationExecution$Outbound | null | undefined;
    automationExecutionTriggerPath?: string | null | undefined;
    automationPath?: string | null | undefined;
};
/** @internal */
export declare const AutomationExecutionView$outboundSchema: z.ZodType<AutomationExecutionView$Outbound, z.ZodTypeDef, AutomationExecutionView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationExecutionView$ {
    /** @deprecated use `AutomationExecutionView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationExecutionView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationExecutionView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationExecutionView$Outbound, z.ZodTypeDef, AutomationExecutionView>;
    /** @deprecated use `AutomationExecutionView$Outbound` instead. */
    type Outbound = AutomationExecutionView$Outbound;
}
export declare function automationExecutionViewToJSON(automationExecutionView: AutomationExecutionView): string;
export declare function automationExecutionViewFromJSON(jsonString: string): SafeParseResult<AutomationExecutionView, SDKValidationError>;
