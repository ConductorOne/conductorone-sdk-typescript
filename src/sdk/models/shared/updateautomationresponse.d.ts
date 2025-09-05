import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Automation, Automation$Outbound } from "./automation.js";
/**
 * The UpdateAutomationResponse message.
 */
export type UpdateAutomationResponse = {
    automation?: Automation | null | undefined;
    /**
     * If we create a new trigger with an HMAC secret we return the HMAC on this field
     */
    webhookHmacSecret?: string | null | undefined;
};
/** @internal */
export declare const UpdateAutomationResponse$inboundSchema: z.ZodType<UpdateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAutomationResponse$Outbound = {
    automation?: Automation$Outbound | null | undefined;
    webhookHmacSecret?: string | null | undefined;
};
/** @internal */
export declare const UpdateAutomationResponse$outboundSchema: z.ZodType<UpdateAutomationResponse$Outbound, z.ZodTypeDef, UpdateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAutomationResponse$ {
    /** @deprecated use `UpdateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAutomationResponse$Outbound, z.ZodTypeDef, UpdateAutomationResponse>;
    /** @deprecated use `UpdateAutomationResponse$Outbound` instead. */
    type Outbound = UpdateAutomationResponse$Outbound;
}
export declare function updateAutomationResponseToJSON(updateAutomationResponse: UpdateAutomationResponse): string;
export declare function updateAutomationResponseFromJSON(jsonString: string): SafeParseResult<UpdateAutomationResponse, SDKValidationError>;
