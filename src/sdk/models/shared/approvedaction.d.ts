import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementReference, AppEntitlementReference$Outbound } from "./appentitlementreference.js";
/**
 * The approved action indicates that the approvalinstance had an outcome of approved.
 */
export type ApprovedAction = {
    approvedAt?: Date | null | undefined;
    /**
     * The entitlements that were approved. This will only ever be a list of one entitlement.
     */
    entitlements?: Array<AppEntitlementReference> | null | undefined;
    /**
     * The ID of the step-up transaction that was used for this approval, if step-up was required.
     */
    stepUpTransactionId?: string | null | undefined;
    /**
     * The UserID that approved this step.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const ApprovedAction$inboundSchema: z.ZodType<ApprovedAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ApprovedAction$Outbound = {
    approvedAt?: string | null | undefined;
    entitlements?: Array<AppEntitlementReference$Outbound> | null | undefined;
    stepUpTransactionId?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const ApprovedAction$outboundSchema: z.ZodType<ApprovedAction$Outbound, z.ZodTypeDef, ApprovedAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApprovedAction$ {
    /** @deprecated use `ApprovedAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApprovedAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApprovedAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApprovedAction$Outbound, z.ZodTypeDef, ApprovedAction>;
    /** @deprecated use `ApprovedAction$Outbound` instead. */
    type Outbound = ApprovedAction$Outbound;
}
export declare function approvedActionToJSON(approvedAction: ApprovedAction): string;
export declare function approvedActionFromJSON(jsonString: string): SafeParseResult<ApprovedAction, SDKValidationError>;
