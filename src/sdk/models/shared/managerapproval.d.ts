import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The manager approval object provides configuration options for approval when the target of the approval is the manager of the user in the task.
 */
export type ManagerApproval = {
    /**
     * Configuration to allow self approval if the target user is their own manager. This may occur if a service account has an identity user and manager specified as the same person.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * The array of users determined to be the manager during processing time.
     */
    assignedUserIds?: Array<string> | null | undefined;
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
export declare const ManagerApproval$inboundSchema: z.ZodType<ManagerApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type ManagerApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    assignedUserIds?: Array<string> | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ManagerApproval$outboundSchema: z.ZodType<ManagerApproval$Outbound, z.ZodTypeDef, ManagerApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ManagerApproval$ {
    /** @deprecated use `ManagerApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ManagerApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `ManagerApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ManagerApproval$Outbound, z.ZodTypeDef, ManagerApproval>;
    /** @deprecated use `ManagerApproval$Outbound` instead. */
    type Outbound = ManagerApproval$Outbound;
}
export declare function managerApprovalToJSON(managerApproval: ManagerApproval): string;
export declare function managerApprovalFromJSON(jsonString: string): SafeParseResult<ManagerApproval, SDKValidationError>;
