import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The application user status field.
 */
export declare const AppUserStatusStatus: {
    readonly StatusUnspecified: "STATUS_UNSPECIFIED";
    readonly StatusEnabled: "STATUS_ENABLED";
    readonly StatusDisabled: "STATUS_DISABLED";
    readonly StatusDeleted: "STATUS_DELETED";
};
/**
 * The application user status field.
 */
export type AppUserStatusStatus = OpenEnum<typeof AppUserStatusStatus>;
/**
 * The satus of the applicaiton user.
 */
export type AppUserStatus = {
    /**
     * The details of applicaiton user status.
     */
    details?: string | null | undefined;
    /**
     * The application user status field.
     */
    status?: AppUserStatusStatus | null | undefined;
};
/** @internal */
export declare const AppUserStatusStatus$inboundSchema: z.ZodType<AppUserStatusStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppUserStatusStatus$outboundSchema: z.ZodType<AppUserStatusStatus, z.ZodTypeDef, AppUserStatusStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserStatusStatus$ {
    /** @deprecated use `AppUserStatusStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserStatusStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserStatusStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserStatusStatus, z.ZodTypeDef, AppUserStatusStatus>;
}
/** @internal */
export declare const AppUserStatus$inboundSchema: z.ZodType<AppUserStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserStatus$Outbound = {
    details?: string | null | undefined;
    status?: string | null | undefined;
};
/** @internal */
export declare const AppUserStatus$outboundSchema: z.ZodType<AppUserStatus$Outbound, z.ZodTypeDef, AppUserStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserStatus$ {
    /** @deprecated use `AppUserStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserStatus$Outbound, z.ZodTypeDef, AppUserStatus>;
    /** @deprecated use `AppUserStatus$Outbound` instead. */
    type Outbound = AppUserStatus$Outbound;
}
export declare function appUserStatusToJSON(appUserStatus: AppUserStatus): string;
export declare function appUserStatusFromJSON(jsonString: string): SafeParseResult<AppUserStatus, SDKValidationError>;
