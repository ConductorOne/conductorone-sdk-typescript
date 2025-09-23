import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The manager approval object provides configuration options for approval when the target of the approval is the manager of the user in the task.
 */
export type ManagerApprovalInput = {
    /**
     * Configuration to allow self approval if the target user is their own manager. This may occur if a service account has an identity user and manager specified as the same person.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * Configuration to allow a fallback if no manager is found.
     */
    fallback?: boolean | null | undefined;
    /**
     * Configuration to specific which users to fallback to if fallback is enabled and no manager is found.
     */
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ManagerApprovalInput$inboundSchema: z.ZodType<ManagerApprovalInput, z.ZodTypeDef, unknown>;
/** @internal */
export type ManagerApprovalInput$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ManagerApprovalInput$outboundSchema: z.ZodType<ManagerApprovalInput$Outbound, z.ZodTypeDef, ManagerApprovalInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ManagerApprovalInput$ {
    /** @deprecated use `ManagerApprovalInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ManagerApprovalInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `ManagerApprovalInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ManagerApprovalInput$Outbound, z.ZodTypeDef, ManagerApprovalInput>;
    /** @deprecated use `ManagerApprovalInput$Outbound` instead. */
    type Outbound = ManagerApprovalInput$Outbound;
}
export declare function managerApprovalInputToJSON(managerApprovalInput: ManagerApprovalInput): string;
export declare function managerApprovalInputFromJSON(jsonString: string): SafeParseResult<ManagerApprovalInput, SDKValidationError>;
