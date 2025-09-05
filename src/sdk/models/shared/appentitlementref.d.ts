import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementRef message.
 */
export type AppEntitlementRef = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementRef$inboundSchema: z.ZodType<AppEntitlementRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementRef$Outbound = {
    appId?: string | null | undefined;
    id?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementRef$outboundSchema: z.ZodType<AppEntitlementRef$Outbound, z.ZodTypeDef, AppEntitlementRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementRef$ {
    /** @deprecated use `AppEntitlementRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementRef$Outbound, z.ZodTypeDef, AppEntitlementRef>;
    /** @deprecated use `AppEntitlementRef$Outbound` instead. */
    type Outbound = AppEntitlementRef$Outbound;
}
export declare function appEntitlementRefToJSON(appEntitlementRef: AppEntitlementRef): string;
export declare function appEntitlementRefFromJSON(jsonString: string): SafeParseResult<AppEntitlementRef, SDKValidationError>;
