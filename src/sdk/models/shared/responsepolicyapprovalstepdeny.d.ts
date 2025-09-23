import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponsePolicyApprovalStepDeny message.
 */
export type ResponsePolicyApprovalStepDeny = {
    /**
     * optional comment
     */
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStepDeny$inboundSchema: z.ZodType<ResponsePolicyApprovalStepDeny, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponsePolicyApprovalStepDeny$Outbound = {
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyApprovalStepDeny$outboundSchema: z.ZodType<ResponsePolicyApprovalStepDeny$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStepDeny>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponsePolicyApprovalStepDeny$ {
    /** @deprecated use `ResponsePolicyApprovalStepDeny$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponsePolicyApprovalStepDeny, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponsePolicyApprovalStepDeny$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponsePolicyApprovalStepDeny$Outbound, z.ZodTypeDef, ResponsePolicyApprovalStepDeny>;
    /** @deprecated use `ResponsePolicyApprovalStepDeny$Outbound` instead. */
    type Outbound = ResponsePolicyApprovalStepDeny$Outbound;
}
export declare function responsePolicyApprovalStepDenyToJSON(responsePolicyApprovalStepDeny: ResponsePolicyApprovalStepDeny): string;
export declare function responsePolicyApprovalStepDenyFromJSON(jsonString: string): SafeParseResult<ResponsePolicyApprovalStepDeny, SDKValidationError>;
