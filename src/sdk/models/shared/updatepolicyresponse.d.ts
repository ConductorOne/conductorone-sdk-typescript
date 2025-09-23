import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Policy, Policy$Outbound } from "./policy.js";
/**
 * The UpdatePolicyResponse message contains the updated policy object.
 */
export type UpdatePolicyResponse = {
    policy?: Policy | null | undefined;
};
/** @internal */
export declare const UpdatePolicyResponse$inboundSchema: z.ZodType<UpdatePolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdatePolicyResponse$Outbound = {
    policy?: Policy$Outbound | null | undefined;
};
/** @internal */
export declare const UpdatePolicyResponse$outboundSchema: z.ZodType<UpdatePolicyResponse$Outbound, z.ZodTypeDef, UpdatePolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdatePolicyResponse$ {
    /** @deprecated use `UpdatePolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdatePolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdatePolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdatePolicyResponse$Outbound, z.ZodTypeDef, UpdatePolicyResponse>;
    /** @deprecated use `UpdatePolicyResponse$Outbound` instead. */
    type Outbound = UpdatePolicyResponse$Outbound;
}
export declare function updatePolicyResponseToJSON(updatePolicyResponse: UpdatePolicyResponse): string;
export declare function updatePolicyResponseFromJSON(jsonString: string): SafeParseResult<UpdatePolicyResponse, SDKValidationError>;
