import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyInput, PolicyInput$Outbound } from "./policy.js";
/**
 * The UpdatePolicyRequest message contains the policy object to update and a field mask to indicate which fields to update. It uses URL value for input.
 */
export type UpdatePolicyRequest = {
    policy?: PolicyInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdatePolicyRequest$inboundSchema: z.ZodType<UpdatePolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdatePolicyRequest$Outbound = {
    policy?: PolicyInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdatePolicyRequest$outboundSchema: z.ZodType<UpdatePolicyRequest$Outbound, z.ZodTypeDef, UpdatePolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdatePolicyRequest$ {
    /** @deprecated use `UpdatePolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdatePolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdatePolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdatePolicyRequest$Outbound, z.ZodTypeDef, UpdatePolicyRequest>;
    /** @deprecated use `UpdatePolicyRequest$Outbound` instead. */
    type Outbound = UpdatePolicyRequest$Outbound;
}
export declare function updatePolicyRequestToJSON(updatePolicyRequest: UpdatePolicyRequest): string;
export declare function updatePolicyRequestFromJSON(jsonString: string): SafeParseResult<UpdatePolicyRequest, SDKValidationError>;
