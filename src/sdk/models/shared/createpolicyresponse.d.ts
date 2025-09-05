import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Policy, Policy$Outbound } from "./policy.js";
/**
 * The CreatePolicyResponse message contains the created policy object.
 */
export type CreatePolicyResponse = {
    policy?: Policy | null | undefined;
};
/** @internal */
export declare const CreatePolicyResponse$inboundSchema: z.ZodType<CreatePolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreatePolicyResponse$Outbound = {
    policy?: Policy$Outbound | null | undefined;
};
/** @internal */
export declare const CreatePolicyResponse$outboundSchema: z.ZodType<CreatePolicyResponse$Outbound, z.ZodTypeDef, CreatePolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreatePolicyResponse$ {
    /** @deprecated use `CreatePolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreatePolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreatePolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreatePolicyResponse$Outbound, z.ZodTypeDef, CreatePolicyResponse>;
    /** @deprecated use `CreatePolicyResponse$Outbound` instead. */
    type Outbound = CreatePolicyResponse$Outbound;
}
export declare function createPolicyResponseToJSON(createPolicyResponse: CreatePolicyResponse): string;
export declare function createPolicyResponseFromJSON(jsonString: string): SafeParseResult<CreatePolicyResponse, SDKValidationError>;
