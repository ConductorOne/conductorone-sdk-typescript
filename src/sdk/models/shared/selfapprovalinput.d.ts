import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.
 */
export type SelfApprovalInput = {
    /**
     * Configuration to allow a fallback if the identity user of the target app user cannot be determined.
     */
    fallback?: boolean | null | undefined;
    /**
     * Configuration to specific which users to fallback to if fallback is enabled and the identity user of the target app user cannot be determined.
     */
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SelfApprovalInput$inboundSchema: z.ZodType<SelfApprovalInput, z.ZodTypeDef, unknown>;
/** @internal */
export type SelfApprovalInput$Outbound = {
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SelfApprovalInput$outboundSchema: z.ZodType<SelfApprovalInput$Outbound, z.ZodTypeDef, SelfApprovalInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SelfApprovalInput$ {
    /** @deprecated use `SelfApprovalInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SelfApprovalInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `SelfApprovalInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SelfApprovalInput$Outbound, z.ZodTypeDef, SelfApprovalInput>;
    /** @deprecated use `SelfApprovalInput$Outbound` instead. */
    type Outbound = SelfApprovalInput$Outbound;
}
export declare function selfApprovalInputToJSON(selfApprovalInput: SelfApprovalInput): string;
export declare function selfApprovalInputFromJSON(jsonString: string): SafeParseResult<SelfApprovalInput, SDKValidationError>;
