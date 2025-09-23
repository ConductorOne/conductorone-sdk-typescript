import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyStep, PolicyStep$Outbound } from "./policystep.js";
/**
 * The ResponsePolicyApprovalReplacePolicy message.
 */
export type ResponsePolicyApprovalReplacePolicy = {
    /**
     * The comment field.
     */
    comment?: string | null | undefined;
    /**
     * The policySteps field.
     */
    policySteps?: Array<PolicyStep> | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalReplacePolicy$inboundSchema: z.ZodType<ResponsePolicyApprovalReplacePolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponsePolicyApprovalReplacePolicy$Outbound = {
    comment?: string | null | undefined;
    policySteps?: Array<PolicyStep$Outbound> | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalReplacePolicy$outboundSchema: z.ZodType<ResponsePolicyApprovalReplacePolicy$Outbound, z.ZodTypeDef, ResponsePolicyApprovalReplacePolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponsePolicyApprovalReplacePolicy$ {
    /** @deprecated use `ResponsePolicyApprovalReplacePolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponsePolicyApprovalReplacePolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponsePolicyApprovalReplacePolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponsePolicyApprovalReplacePolicy$Outbound, z.ZodTypeDef, ResponsePolicyApprovalReplacePolicy>;
    /** @deprecated use `ResponsePolicyApprovalReplacePolicy$Outbound` instead. */
    type Outbound = ResponsePolicyApprovalReplacePolicy$Outbound;
}
export declare function responsePolicyApprovalReplacePolicyToJSON(responsePolicyApprovalReplacePolicy: ResponsePolicyApprovalReplacePolicy): string;
export declare function responsePolicyApprovalReplacePolicyFromJSON(jsonString: string): SafeParseResult<ResponsePolicyApprovalReplacePolicy, SDKValidationError>;
