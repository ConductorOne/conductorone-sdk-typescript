import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteBundleAutomationRequest message.
 */
export type DeleteBundleAutomationRequest = {};
/** @internal */
export declare const DeleteBundleAutomationRequest$inboundSchema: z.ZodType<DeleteBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteBundleAutomationRequest$Outbound = {};
/** @internal */
export declare const DeleteBundleAutomationRequest$outboundSchema: z.ZodType<DeleteBundleAutomationRequest$Outbound, z.ZodTypeDef, DeleteBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteBundleAutomationRequest$ {
    /** @deprecated use `DeleteBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteBundleAutomationRequest$Outbound, z.ZodTypeDef, DeleteBundleAutomationRequest>;
    /** @deprecated use `DeleteBundleAutomationRequest$Outbound` instead. */
    type Outbound = DeleteBundleAutomationRequest$Outbound;
}
export declare function deleteBundleAutomationRequestToJSON(deleteBundleAutomationRequest: DeleteBundleAutomationRequest): string;
export declare function deleteBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<DeleteBundleAutomationRequest, SDKValidationError>;
