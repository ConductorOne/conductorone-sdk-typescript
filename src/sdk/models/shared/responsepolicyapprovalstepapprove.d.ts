import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponsePolicyApprovalStepApprove message.
 */
export type ResponsePolicyApprovalStepApprove = {
    /**
     * optional comment
     */
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStepApprove$inboundSchema: z.ZodType<ResponsePolicyApprovalStepApprove, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponsePolicyApprovalStepApprove$Outbound = {
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStepApprove$outboundSchema: z.ZodType<ResponsePolicyApprovalStepApprove$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStepApprove>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponsePolicyApprovalStepApprove$ {
    /** @deprecated use `ResponsePolicyApprovalStepApprove$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponsePolicyApprovalStepApprove, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponsePolicyApprovalStepApprove$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponsePolicyApprovalStepApprove$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStepApprove>;
    /** @deprecated use `ResponsePolicyApprovalStepApprove$Outbound` instead. */
    type Outbound = ResponsePolicyApprovalStepApprove$Outbound;
}
export declare function responsePolicyApprovalStepApproveToJSON(responsePolicyApprovalStepApprove: ResponsePolicyApprovalStepApprove): string;
export declare function responsePolicyApprovalStepApproveFromJSON(jsonString: string): SafeParseResult<ResponsePolicyApprovalStepApprove, SDKValidationError>;
