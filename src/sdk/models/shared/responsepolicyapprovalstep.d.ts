import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ResponsePolicyApprovalReplacePolicy, ResponsePolicyApprovalReplacePolicy$Outbound } from "./responsepolicyapprovalreplacepolicy.js";
import { ResponsePolicyApprovalStepApprove, ResponsePolicyApprovalStepApprove$Outbound } from "./responsepolicyapprovalstepapprove.js";
import { ResponsePolicyApprovalStepDeny, ResponsePolicyApprovalStepDeny$Outbound } from "./responsepolicyapprovalstepdeny.js";
import { ResponsePolicyApprovalStepReassign, ResponsePolicyApprovalStepReassign$Outbound } from "./responsepolicyapprovalstepreassign.js";
/**
 * The ResponsePolicyApprovalStep message.
 *
 * @remarks
 *
 * This message contains a oneof named action. Only a single field of the following list may be set at a time:
 *   - approve
 *   - deny
 *   - reassign
 *   - replacePolicy
 */
export type ResponsePolicyApprovalStep = {
    approve?: ResponsePolicyApprovalStepApprove | null | undefined;
    deny?: ResponsePolicyApprovalStepDeny | null | undefined;
    reassign?: ResponsePolicyApprovalStepReassign | null | undefined;
    replacePolicy?: ResponsePolicyApprovalReplacePolicy | null | undefined;
    /**
     * version contains the constant value "v1". Future versions of the Webhook Response
     *
     * @remarks
     *  will use a different string.
     */
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStep$inboundSchema: z.ZodType<ResponsePolicyApprovalStep, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponsePolicyApprovalStep$Outbound = {
    approve?: ResponsePolicyApprovalStepApprove$Outbound | null | undefined;
    deny?: ResponsePolicyApprovalStepDeny$Outbound | null | undefined;
    reassign?: ResponsePolicyApprovalStepReassign$Outbound | null | undefined;
    replacePolicy?: ResponsePolicyApprovalReplacePolicy$Outbound | null | undefined;
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStep$outboundSchema: z.ZodType<ResponsePolicyApprovalStep$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponsePolicyApprovalStep$ {
    /** @deprecated use `ResponsePolicyApprovalStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponsePolicyApprovalStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponsePolicyApprovalStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponsePolicyApprovalStep$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStep>;
    /** @deprecated use `ResponsePolicyApprovalStep$Outbound` instead. */
    type Outbound = ResponsePolicyApprovalStep$Outbound;
}
export declare function responsePolicyApprovalStepToJSON(responsePolicyApprovalStep: ResponsePolicyApprovalStep): string;
export declare function responsePolicyApprovalStepFromJSON(jsonString: string): SafeParseResult<ResponsePolicyApprovalStep, SDKValidationError>;
