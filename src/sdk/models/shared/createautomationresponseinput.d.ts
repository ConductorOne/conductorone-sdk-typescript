import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Automation, Automation$Outbound } from "./automation.js";
/**
 * The CreateAutomationResponse message.
 */
export type CreateAutomationResponseInput = {
    automation?: Automation | null | undefined;
    /**
     * If we create a new trigger with an HMAC secret we return the HMAC on this field
     */
    webhookHmacSecret?: string | null | undefined;
};
/** @internal */
export declare const CreateAutomationResponseInput$inboundSchema: z.ZodType<CreateAutomationResponseInput, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAutomationResponseInput$Outbound = {
    automation?: Automation$Outbound | null | undefined;
    webhookHmacSecret?: string | null | undefined;
};
/** @internal */
export declare const CreateAutomationResponseInput$outboundSchema: z.ZodType<CreateAutomationResponseInput$Outbound, z.ZodTypeDef, CreateAutomationResponseInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAutomationResponseInput$ {
    /** @deprecated use `CreateAutomationResponseInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAutomationResponseInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAutomationResponseInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAutomationResponseInput$Outbound, z.ZodTypeDef, CreateAutomationResponseInput>;
    /** @deprecated use `CreateAutomationResponseInput$Outbound` instead. */
    type Outbound = CreateAutomationResponseInput$Outbound;
}
export declare function createAutomationResponseInputToJSON(createAutomationResponseInput: CreateAutomationResponseInput): string;
export declare function createAutomationResponseInputFromJSON(jsonString: string): SafeParseResult<CreateAutomationResponseInput, SDKValidationError>;
