import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Policy, Policy$Outbound } from "./policy.js";
/**
 * The GetPolicyResponse message contains the policy object.
 */
export type GetPolicyResponse = {
    policy?: Policy | null | undefined;
};
/** @internal */
export declare const GetPolicyResponse$inboundSchema: z.ZodType<GetPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetPolicyResponse$Outbound = {
    policy?: Policy$Outbound | null | undefined;
};
/** @internal */
export declare const GetPolicyResponse$outboundSchema: z.ZodType<GetPolicyResponse$Outbound, z.ZodTypeDef, GetPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetPolicyResponse$ {
    /** @deprecated use `GetPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetPolicyResponse$Outbound, z.ZodTypeDef, GetPolicyResponse>;
    /** @deprecated use `GetPolicyResponse$Outbound` instead. */
    type Outbound = GetPolicyResponse$Outbound;
}
export declare function getPolicyResponseToJSON(getPolicyResponse: GetPolicyResponse): string;
export declare function getPolicyResponseFromJSON(jsonString: string): SafeParseResult<GetPolicyResponse, SDKValidationError>;
