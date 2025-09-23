import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ManualAutomationTrigger message.
 */
export type ManualAutomationTrigger = {};
/** @internal */
export declare const ManualAutomationTrigger$inboundSchema: z.ZodType<ManualAutomationTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type ManualAutomationTrigger$Outbound = {};
/** @internal */
export declare const ManualAutomationTrigger$outboundSchema: z.ZodType<ManualAutomationTrigger$Outbound, z.ZodTypeDef, ManualAutomationTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ManualAutomationTrigger$ {
    /** @deprecated use `ManualAutomationTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ManualAutomationTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `ManualAutomationTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ManualAutomationTrigger$Outbound, z.ZodTypeDef, ManualAutomationTrigger>;
    /** @deprecated use `ManualAutomationTrigger$Outbound` instead. */
    type Outbound = ManualAutomationTrigger$Outbound;
}
export declare function manualAutomationTriggerToJSON(manualAutomationTrigger: ManualAutomationTrigger): string;
export declare function manualAutomationTriggerFromJSON(jsonString: string): SafeParseResult<ManualAutomationTrigger, SDKValidationError>;
