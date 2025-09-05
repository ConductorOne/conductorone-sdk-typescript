import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomation, AppEntitlementAutomation$Outbound } from "./appentitlementautomation.js";
/**
 * The CreateAutomationResponse message.
 */
export type CreateAutomationResponse = {
    automation?: AppEntitlementAutomation | null | undefined;
};
/** @internal */
export declare const CreateAutomationResponse$inboundSchema: z.ZodType<CreateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAutomationResponse$Outbound = {
    automation?: AppEntitlementAutomation$Outbound | null | undefined;
};
/** @internal */
export declare const CreateAutomationResponse$outboundSchema: z.ZodType<CreateAutomationResponse$Outbound, z.ZodTypeDef, CreateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAutomationResponse$ {
    /** @deprecated use `CreateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAutomationResponse$Outbound, z.ZodTypeDef, CreateAutomationResponse>;
    /** @deprecated use `CreateAutomationResponse$Outbound` instead. */
    type Outbound = CreateAutomationResponse$Outbound;
}
export declare function createAutomationResponseToJSON(createAutomationResponse: CreateAutomationResponse): string;
export declare function createAutomationResponseFromJSON(jsonString: string): SafeParseResult<CreateAutomationResponse, SDKValidationError>;
