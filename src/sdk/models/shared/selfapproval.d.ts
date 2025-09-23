import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.
 */
export type SelfApproval = {
    /**
     * The array of users determined to be themselves during approval. This should only ever be one person, but is saved because it may change if the owner of an app user changes while the ticket is open.
     */
    assignedUserIds?: Array<string> | null | undefined;
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
export declare const SelfApproval$inboundSchema: z.ZodType<SelfApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type SelfApproval$Outbound = {
    assignedUserIds?: Array<string> | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SelfApproval$outboundSchema: z.ZodType<SelfApproval$Outbound, z.ZodTypeDef, SelfApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SelfApproval$ {
    /** @deprecated use `SelfApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SelfApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `SelfApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SelfApproval$Outbound, z.ZodTypeDef, SelfApproval>;
    /** @deprecated use `SelfApproval$Outbound` instead. */
    type Outbound = SelfApproval$Outbound;
}
export declare function selfApprovalToJSON(selfApproval: SelfApproval): string;
export declare function selfApprovalFromJSON(jsonString: string): SafeParseResult<SelfApproval, SDKValidationError>;
