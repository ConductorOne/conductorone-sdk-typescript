import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AutomationExecutionRef message.
 */
export type AutomationExecutionRef = {
    /**
     * The id field.
     */
    id?: number | null | undefined;
};
/** @internal */
export declare const AutomationExecutionRef$inboundSchema: z.ZodType<AutomationExecutionRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationExecutionRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const AutomationExecutionRef$outboundSchema: z.ZodType<AutomationExecutionRef$Outbound, z.ZodTypeDef, AutomationExecutionRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationExecutionRef$ {
    /** @deprecated use `AutomationExecutionRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationExecutionRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationExecutionRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationExecutionRef$Outbound, z.ZodTypeDef, AutomationExecutionRef>;
    /** @deprecated use `AutomationExecutionRef$Outbound` instead. */
    type Outbound = AutomationExecutionRef$Outbound;
}
export declare function automationExecutionRefToJSON(automationExecutionRef: AutomationExecutionRef): string;
export declare function automationExecutionRefFromJSON(jsonString: string): SafeParseResult<AutomationExecutionRef, SDKValidationError>;
