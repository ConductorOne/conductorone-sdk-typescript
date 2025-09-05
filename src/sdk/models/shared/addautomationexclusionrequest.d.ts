import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AddAutomationExclusionRequest message.
 */
export type AddAutomationExclusionRequest = {
    /**
     * The userIds field.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AddAutomationExclusionRequest$inboundSchema: z.ZodType<AddAutomationExclusionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAutomationExclusionRequest$Outbound = {
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AddAutomationExclusionRequest$outboundSchema: z.ZodType<AddAutomationExclusionRequest$Outbound, z.ZodTypeDef, AddAutomationExclusionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAutomationExclusionRequest$ {
    /** @deprecated use `AddAutomationExclusionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAutomationExclusionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAutomationExclusionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAutomationExclusionRequest$Outbound, z.ZodTypeDef, AddAutomationExclusionRequest>;
    /** @deprecated use `AddAutomationExclusionRequest$Outbound` instead. */
    type Outbound = AddAutomationExclusionRequest$Outbound;
}
export declare function addAutomationExclusionRequestToJSON(addAutomationExclusionRequest: AddAutomationExclusionRequest): string;
export declare function addAutomationExclusionRequestFromJSON(jsonString: string): SafeParseResult<AddAutomationExclusionRequest, SDKValidationError>;
