import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The GrantEntitlements message.
 */
export type GrantEntitlements = {
    /**
     * The appEntitlementRefs field.
     */
    appEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The appEntitlementRefsCel field.
     */
    appEntitlementRefsCel?: string | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdCel field.
     */
    userIdCel?: string | null | undefined;
    userRef?: UserRef | null | undefined;
};
/** @internal */
export declare const GrantEntitlements$inboundSchema: z.ZodType<GrantEntitlements, z.ZodTypeDef, unknown>;
/** @internal */
export type GrantEntitlements$Outbound = {
    appEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    appEntitlementRefsCel?: string | null | undefined;
    useSubjectUser?: boolean | null | undefined;
    userIdCel?: string | null | undefined;
    userRef?: UserRef$Outbound | null | undefined;
};
/** @internal */
export declare const GrantEntitlements$outboundSchema: z.ZodType<GrantEntitlements$Outbound, z.ZodTypeDef, GrantEntitlements>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantEntitlements$ {
    /** @deprecated use `GrantEntitlements$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantEntitlements, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantEntitlements$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantEntitlements$Outbound, z.ZodTypeDef, GrantEntitlements>;
    /** @deprecated use `GrantEntitlements$Outbound` instead. */
    type Outbound = GrantEntitlements$Outbound;
}
export declare function grantEntitlementsToJSON(grantEntitlements: GrantEntitlements): string;
export declare function grantEntitlementsFromJSON(jsonString: string): SafeParseResult<GrantEntitlements, SDKValidationError>;
