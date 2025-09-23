import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The EntitlementFilter message.
 */
export type EntitlementFilter = {
    /**
     * The appEntitlementRefs field.
     */
    appEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The appEntitlementRefsCel field.
     */
    appEntitlementRefsCel?: string | null | undefined;
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
};
/** @internal */
export declare const EntitlementFilter$inboundSchema: z.ZodType<EntitlementFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type EntitlementFilter$Outbound = {
    appEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    appEntitlementRefsCel?: string | null | undefined;
    appId?: string | null | undefined;
};
/** @internal */
export declare const EntitlementFilter$outboundSchema: z.ZodType<EntitlementFilter$Outbound, z.ZodTypeDef, EntitlementFilter>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntitlementFilter$ {
    /** @deprecated use `EntitlementFilter$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntitlementFilter, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntitlementFilter$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntitlementFilter$Outbound, z.ZodTypeDef, EntitlementFilter>;
    /** @deprecated use `EntitlementFilter$Outbound` instead. */
    type Outbound = EntitlementFilter$Outbound;
}
export declare function entitlementFilterToJSON(entitlementFilter: EntitlementFilter): string;
export declare function entitlementFilterFromJSON(jsonString: string): SafeParseResult<EntitlementFilter, SDKValidationError>;
