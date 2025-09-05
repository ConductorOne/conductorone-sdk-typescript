import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This provision step indicates that we should delegate provisioning to the configuration of another app entitlement. This app entitlement does not have to be one from the same app, but MUST be configured as a proxy binding leading into this entitlement.
 */
export type DelegatedProvision = {
    /**
     * The AppID of the entitlement to delegate provisioning to.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the entitlement we are delegating provisioning to.
     */
    entitlementId?: string | null | undefined;
    /**
     * If true, a binding will be automatically created from the entitlement of the parent app.
     */
    implicit?: boolean | null | undefined;
};
/** @internal */
export declare const DelegatedProvision$inboundSchema: z.ZodType<DelegatedProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type DelegatedProvision$Outbound = {
    appId?: string | null | undefined;
    entitlementId?: string | null | undefined;
    implicit?: boolean | null | undefined;
};
/** @internal */
export declare const DelegatedProvision$outboundSchema: z.ZodType<DelegatedProvision$Outbound, z.ZodTypeDef, DelegatedProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DelegatedProvision$ {
    /** @deprecated use `DelegatedProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DelegatedProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `DelegatedProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DelegatedProvision$Outbound, z.ZodTypeDef, DelegatedProvision>;
    /** @deprecated use `DelegatedProvision$Outbound` instead. */
    type Outbound = DelegatedProvision$Outbound;
}
export declare function delegatedProvisionToJSON(delegatedProvision: DelegatedProvision): string;
export declare function delegatedProvisionFromJSON(jsonString: string): SafeParseResult<DelegatedProvision, SDKValidationError>;
