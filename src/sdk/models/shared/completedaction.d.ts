import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementReference, AppEntitlementReference$Outbound } from "./appentitlementreference.js";
/**
 * The outcome of a provision instance that has been completed succesfully.
 */
export type CompletedAction = {
    completedAt?: Date | null | undefined;
    /**
     * The list of entitlements that were provisioned. This is leftover from an older design, and is only ever going to be a single entitlement.
     */
    entitlements?: Array<AppEntitlementReference> | null | undefined;
    /**
     * The UserID of who completed provisioning. For connector provisioning this is the system user id, for manual provisioning this is who clicked "provision complete"
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const CompletedAction$inboundSchema: z.ZodType<CompletedAction, z.ZodTypeDef, unknown>;
/** @internal */
export type CompletedAction$Outbound = {
    completedAt?: string | null | undefined;
    entitlements?: Array<AppEntitlementReference$Outbound> | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const CompletedAction$outboundSchema: z.ZodType<CompletedAction$Outbound, z.ZodTypeDef, CompletedAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompletedAction$ {
    /** @deprecated use `CompletedAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompletedAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompletedAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompletedAction$Outbound, z.ZodTypeDef, CompletedAction>;
    /** @deprecated use `CompletedAction$Outbound` instead. */
    type Outbound = CompletedAction$Outbound;
}
export declare function completedActionToJSON(completedAction: CompletedAction): string;
export declare function completedActionFromJSON(jsonString: string): SafeParseResult<CompletedAction, SDKValidationError>;
