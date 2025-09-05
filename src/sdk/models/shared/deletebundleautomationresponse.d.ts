import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteBundleAutomationResponse message.
 */
export type DeleteBundleAutomationResponse = {};
/** @internal */
export declare const DeleteBundleAutomationResponse$inboundSchema: z.ZodType<DeleteBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteBundleAutomationResponse$Outbound = {};
/** @internal */
export declare const DeleteBundleAutomationResponse$outboundSchema: z.ZodType<DeleteBundleAutomationResponse$Outbound, z.ZodTypeDef, DeleteBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteBundleAutomationResponse$ {
    /** @deprecated use `DeleteBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteBundleAutomationResponse$Outbound, z.ZodTypeDef, DeleteBundleAutomationResponse>;
    /** @deprecated use `DeleteBundleAutomationResponse$Outbound` instead. */
    type Outbound = DeleteBundleAutomationResponse$Outbound;
}
export declare function deleteBundleAutomationResponseToJSON(deleteBundleAutomationResponse: DeleteBundleAutomationResponse): string;
export declare function deleteBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<DeleteBundleAutomationResponse, SDKValidationError>;
