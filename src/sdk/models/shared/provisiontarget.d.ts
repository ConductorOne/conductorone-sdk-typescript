import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * ProvisionTarget indicates the specific app, app entitlement, and if known, the app user and grant duration of this provision step
 */
export type ProvisionTarget = {
    /**
     * The app entitlement that should be provisioned.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The app in which the entitlement should be provisioned
     */
    appId?: string | null | undefined;
    /**
     * The app user that should be provisioned. May be unset if the app user is unknown
     */
    appUserId?: string | null | undefined;
    grantDuration?: string | null | undefined;
};
/** @internal */
export declare const ProvisionTarget$inboundSchema: z.ZodType<ProvisionTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type ProvisionTarget$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    grantDuration?: string | null | undefined;
};
/** @internal */
export declare const ProvisionTarget$outboundSchema: z.ZodType<ProvisionTarget$Outbound, z.ZodTypeDef, ProvisionTarget>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProvisionTarget$ {
    /** @deprecated use `ProvisionTarget$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProvisionTarget, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProvisionTarget$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProvisionTarget$Outbound, z.ZodTypeDef, ProvisionTarget>;
    /** @deprecated use `ProvisionTarget$Outbound` instead. */
    type Outbound = ProvisionTarget$Outbound;
}
export declare function provisionTargetToJSON(provisionTarget: ProvisionTarget): string;
export declare function provisionTargetFromJSON(jsonString: string): SafeParseResult<ProvisionTarget, SDKValidationError>;
