import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RemoveAutomationExclusionRequest message.
 */
export type RemoveAutomationExclusionRequest = {
    /**
     * The userIds field.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const RemoveAutomationExclusionRequest$inboundSchema: z.ZodType<RemoveAutomationExclusionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAutomationExclusionRequest$Outbound = {
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const RemoveAutomationExclusionRequest$outboundSchema: z.ZodType<RemoveAutomationExclusionRequest$Outbound, z.ZodTypeDef, RemoveAutomationExclusionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAutomationExclusionRequest$ {
    /** @deprecated use `RemoveAutomationExclusionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAutomationExclusionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAutomationExclusionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAutomationExclusionRequest$Outbound, z.ZodTypeDef, RemoveAutomationExclusionRequest>;
    /** @deprecated use `RemoveAutomationExclusionRequest$Outbound` instead. */
    type Outbound = RemoveAutomationExclusionRequest$Outbound;
}
export declare function removeAutomationExclusionRequestToJSON(removeAutomationExclusionRequest: RemoveAutomationExclusionRequest): string;
export declare function removeAutomationExclusionRequestFromJSON(jsonString: string): SafeParseResult<RemoveAutomationExclusionRequest, SDKValidationError>;
