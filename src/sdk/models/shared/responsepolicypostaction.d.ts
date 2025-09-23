import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponsePolicyPostAction message.
 */
export type ResponsePolicyPostAction = {
    /**
     * version contains the constant value "v1". Future versions of the Webhook Response
     *
     * @remarks
     *  will use a different string.
     */
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyPostAction$inboundSchema: z.ZodType<ResponsePolicyPostAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponsePolicyPostAction$Outbound = {
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponsePolicyPostAction$outboundSchema: z.ZodType<ResponsePolicyPostAction$Outbound, z.ZodTypeDef, ResponsePolicyPostAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponsePolicyPostAction$ {
    /** @deprecated use `ResponsePolicyPostAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponsePolicyPostAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponsePolicyPostAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponsePolicyPostAction$Outbound, z.ZodTypeDef, ResponsePolicyPostAction>;
    /** @deprecated use `ResponsePolicyPostAction$Outbound` instead. */
    type Outbound = ResponsePolicyPostAction$Outbound;
}
export declare function responsePolicyPostActionToJSON(responsePolicyPostAction: ResponsePolicyPostAction): string;
export declare function responsePolicyPostActionFromJSON(jsonString: string): SafeParseResult<ResponsePolicyPostAction, SDKValidationError>;
