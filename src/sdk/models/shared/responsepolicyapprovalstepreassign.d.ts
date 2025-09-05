import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponsePolicyApprovalStepReassign message.
 */
export type ResponsePolicyApprovalStepReassign = {
    /**
     * optional comment
     */
    comment?: string | null | undefined;
    /**
     * The newStepUserIds field.
     */
    newStepUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStepReassign$inboundSchema: z.ZodType<ResponsePolicyApprovalStepReassign, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponsePolicyApprovalStepReassign$Outbound = {
    comment?: string | null | undefined;
    newStepUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStepReassign$outboundSchema: z.ZodType<ResponsePolicyApprovalStepReassign$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStepReassign>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponsePolicyApprovalStepReassign$ {
    /** @deprecated use `ResponsePolicyApprovalStepReassign$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponsePolicyApprovalStepReassign, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponsePolicyApprovalStepReassign$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponsePolicyApprovalStepReassign$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStepReassign>;
    /** @deprecated use `ResponsePolicyApprovalStepReassign$Outbound` instead. */
    type Outbound = ResponsePolicyApprovalStepReassign$Outbound;
}
export declare function responsePolicyApprovalStepReassignToJSON(responsePolicyApprovalStepReassign: ResponsePolicyApprovalStepReassign): string;
export declare function responsePolicyApprovalStepReassignFromJSON(jsonString: string): SafeParseResult<ResponsePolicyApprovalStepReassign, SDKValidationError>;
