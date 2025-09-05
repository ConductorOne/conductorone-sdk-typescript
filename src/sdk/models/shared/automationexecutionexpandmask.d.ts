import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AutomationExecutionExpandMask message.
 */
export type AutomationExecutionExpandMask = {
    /**
     * The paths field.
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AutomationExecutionExpandMask$inboundSchema: z.ZodType<AutomationExecutionExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationExecutionExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AutomationExecutionExpandMask$outboundSchema: z.ZodType<AutomationExecutionExpandMask$Outbound, z.ZodTypeDef, AutomationExecutionExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationExecutionExpandMask$ {
    /** @deprecated use `AutomationExecutionExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationExecutionExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationExecutionExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationExecutionExpandMask$Outbound, z.ZodTypeDef, AutomationExecutionExpandMask>;
    /** @deprecated use `AutomationExecutionExpandMask$Outbound` instead. */
    type Outbound = AutomationExecutionExpandMask$Outbound;
}
export declare function automationExecutionExpandMaskToJSON(automationExecutionExpandMask: AutomationExecutionExpandMask): string;
export declare function automationExecutionExpandMaskFromJSON(jsonString: string): SafeParseResult<AutomationExecutionExpandMask, SDKValidationError>;
