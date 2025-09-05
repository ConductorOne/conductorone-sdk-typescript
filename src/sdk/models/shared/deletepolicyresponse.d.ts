import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type DeletePolicyResponse = {};
/** @internal */
export declare const DeletePolicyResponse$inboundSchema: z.ZodType<DeletePolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeletePolicyResponse$Outbound = {};
/** @internal */
export declare const DeletePolicyResponse$outboundSchema: z.ZodType<DeletePolicyResponse$Outbound, z.ZodTypeDef, DeletePolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeletePolicyResponse$ {
    /** @deprecated use `DeletePolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeletePolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeletePolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeletePolicyResponse$Outbound, z.ZodTypeDef, DeletePolicyResponse>;
    /** @deprecated use `DeletePolicyResponse$Outbound` instead. */
    type Outbound = DeletePolicyResponse$Outbound;
}
export declare function deletePolicyResponseToJSON(deletePolicyResponse: DeletePolicyResponse): string;
export declare function deletePolicyResponseFromJSON(jsonString: string): SafeParseResult<DeletePolicyResponse, SDKValidationError>;
