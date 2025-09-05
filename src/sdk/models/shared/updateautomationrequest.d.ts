import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationInput, AutomationInput$Outbound } from "./automation.js";
/**
 * The UpdateAutomationRequest message.
 */
export type UpdateAutomationRequest = {
    automation?: AutomationInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAutomationRequest$inboundSchema: z.ZodType<UpdateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAutomationRequest$Outbound = {
    automation?: AutomationInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAutomationRequest$outboundSchema: z.ZodType<UpdateAutomationRequest$Outbound, z.ZodTypeDef, UpdateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAutomationRequest$ {
    /** @deprecated use `UpdateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAutomationRequest$Outbound, z.ZodTypeDef, UpdateAutomationRequest>;
    /** @deprecated use `UpdateAutomationRequest$Outbound` instead. */
    type Outbound = UpdateAutomationRequest$Outbound;
}
export declare function updateAutomationRequestToJSON(updateAutomationRequest: UpdateAutomationRequest): string;
export declare function updateAutomationRequestFromJSON(jsonString: string): SafeParseResult<UpdateAutomationRequest, SDKValidationError>;
