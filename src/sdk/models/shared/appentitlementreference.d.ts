import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This object references an app entitlement's ID and AppID.
 */
export type AppEntitlementReference = {
    /**
     * The ID of the Entitlement.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the App this entitlement belongs to.
     */
    appId?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementReference$inboundSchema: z.ZodType<AppEntitlementReference, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementReference$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementReference$outboundSchema: z.ZodType<AppEntitlementReference$Outbound, z.ZodTypeDef, AppEntitlementReference>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementReference$ {
    /** @deprecated use `AppEntitlementReference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementReference, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementReference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementReference$Outbound, z.ZodTypeDef, AppEntitlementReference>;
    /** @deprecated use `AppEntitlementReference$Outbound` instead. */
    type Outbound = AppEntitlementReference$Outbound;
}
export declare function appEntitlementReferenceToJSON(appEntitlementReference: AppEntitlementReference): string;
export declare function appEntitlementReferenceFromJSON(jsonString: string): SafeParseResult<AppEntitlementReference, SDKValidationError>;
