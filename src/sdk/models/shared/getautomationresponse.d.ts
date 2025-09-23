import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Automation, Automation$Outbound } from "./automation.js";
/**
 * The GetAutomationResponse message.
 */
export type GetAutomationResponse = {
    automation?: Automation | null | undefined;
};
/** @internal */
export declare const GetAutomationResponse$inboundSchema: z.ZodType<GetAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAutomationResponse$Outbound = {
    automation?: Automation$Outbound | null | undefined;
};
/** @internal */
export declare const GetAutomationResponse$outboundSchema: z.ZodType<GetAutomationResponse$Outbound, z.ZodTypeDef, GetAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAutomationResponse$ {
    /** @deprecated use `GetAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAutomationResponse$Outbound, z.ZodTypeDef, GetAutomationResponse>;
    /** @deprecated use `GetAutomationResponse$Outbound` instead. */
    type Outbound = GetAutomationResponse$Outbound;
}
export declare function getAutomationResponseToJSON(getAutomationResponse: GetAutomationResponse): string;
export declare function getAutomationResponseFromJSON(jsonString: string): SafeParseResult<GetAutomationResponse, SDKValidationError>;
