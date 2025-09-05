import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomationInput, AppEntitlementAutomationInput$Outbound } from "./appentitlementautomationinput.js";
/**
 * The CreateAutomationRequest message.
 */
export type CreateAutomationRequest = {
    automation?: AppEntitlementAutomationInput | null | undefined;
};
/** @internal */
export declare const CreateAutomationRequest$inboundSchema: z.ZodType<CreateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAutomationRequest$Outbound = {
    automation?: AppEntitlementAutomationInput$Outbound | null | undefined;
};
/** @internal */
export declare const CreateAutomationRequest$outboundSchema: z.ZodType<CreateAutomationRequest$Outbound, z.ZodTypeDef, CreateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAutomationRequest$ {
    /** @deprecated use `CreateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAutomationRequest$Outbound, z.ZodTypeDef, CreateAutomationRequest>;
    /** @deprecated use `CreateAutomationRequest$Outbound` instead. */
    type Outbound = CreateAutomationRequest$Outbound;
}
export declare function createAutomationRequestToJSON(createAutomationRequest: CreateAutomationRequest): string;
export declare function createAutomationRequestFromJSON(jsonString: string): SafeParseResult<CreateAutomationRequest, SDKValidationError>;
