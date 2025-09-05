import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * GrantReasonReferenceStrength is used to indicate the strength of the reference to the reason.
 *
 * @remarks
 *  This is used to determine if a grant should be removed when all strong reasons are removed.
 */
export declare const ReferenceStrength: {
    readonly GrantReasonReferenceStrengthUnspecified: "GRANT_REASON_REFERENCE_STRENGTH_UNSPECIFIED";
    readonly GrantReasonReferenceStrengthWeak: "GRANT_REASON_REFERENCE_STRENGTH_WEAK";
    readonly GrantReasonReferenceStrengthStrong: "GRANT_REASON_REFERENCE_STRENGTH_STRONG";
};
/**
 * GrantReasonReferenceStrength is used to indicate the strength of the reference to the reason.
 *
 * @remarks
 *  This is used to determine if a grant should be removed when all strong reasons are removed.
 */
export type ReferenceStrength = OpenEnum<typeof ReferenceStrength>;
/**
 * The GrantReason message.
 */
export type GrantReason = {
    /**
     * The ID of the app entitlement that is associated with the grant reason.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the app that is associated with the grant reason.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app user that is associated with the grant reason.
     */
    appUserId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * This is the other part of the derived ID which include the details like ticket_id, group_id, etc. This provides the uniqueness.
     */
    derivedIdData?: string | null | undefined;
    /**
     * This is one part of the derived ID, indicating the type, like "ticket" or "group"
     */
    derivedIdType?: string | null | undefined;
    reasonExpiresAt?: Date | null | undefined;
    /**
     * GrantReasonReferenceStrength is used to indicate the strength of the reference to the reason.
     *
     * @remarks
     *  This is used to determine if a grant should be removed when all strong reasons are removed.
     */
    referenceStrength?: ReferenceStrength | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const ReferenceStrength$inboundSchema: z.ZodType<ReferenceStrength, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ReferenceStrength$outboundSchema: z.ZodType<ReferenceStrength, z.ZodTypeDef, ReferenceStrength>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReferenceStrength$ {
    /** @deprecated use `ReferenceStrength$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReferenceStrength, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReferenceStrength$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReferenceStrength, z.ZodTypeDef, ReferenceStrength>;
}
/** @internal */
export declare const GrantReason$inboundSchema: z.ZodType<GrantReason, z.ZodTypeDef, unknown>;
/** @internal */
export type GrantReason$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    derivedIdData?: string | null | undefined;
    derivedIdType?: string | null | undefined;
    reasonExpiresAt?: string | null | undefined;
    referenceStrength?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const GrantReason$outboundSchema: z.ZodType<GrantReason$Outbound, z.ZodTypeDef, GrantReason>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantReason$ {
    /** @deprecated use `GrantReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantReason, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantReason$Outbound, z.ZodTypeDef, GrantReason>;
    /** @deprecated use `GrantReason$Outbound` instead. */
    type Outbound = GrantReason$Outbound;
}
export declare function grantReasonToJSON(grantReason: GrantReason): string;
export declare function grantReasonFromJSON(jsonString: string): SafeParseResult<GrantReason, SDKValidationError>;
