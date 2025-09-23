import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The user approval object describes the approval configuration of a policy step that needs to be approved by a specific list of users.
 */
export type UserApproval = {
    /**
     * Configuration to allow self approval of if the user is specified and also the target of the ticket.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * Array of users configured for approval.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const UserApproval$inboundSchema: z.ZodType<UserApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type UserApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const UserApproval$outboundSchema: z.ZodType<UserApproval$Outbound, z.ZodTypeDef, UserApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserApproval$ {
    /** @deprecated use `UserApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserApproval$Outbound, z.ZodTypeDef, UserApproval>;
    /** @deprecated use `UserApproval$Outbound` instead. */
    type Outbound = UserApproval$Outbound;
}
export declare function userApprovalToJSON(userApproval: UserApproval): string;
export declare function userApprovalFromJSON(jsonString: string): SafeParseResult<UserApproval, SDKValidationError>;
