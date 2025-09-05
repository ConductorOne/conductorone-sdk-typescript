import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeletePolicyRequest message contains the ID of the policy to delete. It uses URL value for input.
 */
export type DeletePolicyRequest = {};
/** @internal */
export declare const DeletePolicyRequest$inboundSchema: z.ZodType<DeletePolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeletePolicyRequest$Outbound = {};
/** @internal */
export declare const DeletePolicyRequest$outboundSchema: z.ZodType<DeletePolicyRequest$Outbound, z.ZodTypeDef, DeletePolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeletePolicyRequest$ {
    /** @deprecated use `DeletePolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeletePolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeletePolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeletePolicyRequest$Outbound, z.ZodTypeDef, DeletePolicyRequest>;
    /** @deprecated use `DeletePolicyRequest$Outbound` instead. */
    type Outbound = DeletePolicyRequest$Outbound;
}
export declare function deletePolicyRequestToJSON(deletePolicyRequest: DeletePolicyRequest): string;
export declare function deletePolicyRequestFromJSON(jsonString: string): SafeParseResult<DeletePolicyRequest, SDKValidationError>;
