import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ReassignToApprovers message.
 */
export type ReassignToApprovers = {
    /**
     * The approverIds field.
     */
    approverIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ReassignToApprovers$inboundSchema: z.ZodType<ReassignToApprovers, z.ZodTypeDef, unknown>;
/** @internal */
export type ReassignToApprovers$Outbound = {
    approverIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ReassignToApprovers$outboundSchema: z.ZodType<ReassignToApprovers$Outbound, z.ZodTypeDef, ReassignToApprovers>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReassignToApprovers$ {
    /** @deprecated use `ReassignToApprovers$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReassignToApprovers, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReassignToApprovers$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReassignToApprovers$Outbound, z.ZodTypeDef, ReassignToApprovers>;
    /** @deprecated use `ReassignToApprovers$Outbound` instead. */
    type Outbound = ReassignToApprovers$Outbound;
}
export declare function reassignToApproversToJSON(reassignToApprovers: ReassignToApprovers): string;
export declare function reassignToApproversFromJSON(jsonString: string): SafeParseResult<ReassignToApprovers, SDKValidationError>;
