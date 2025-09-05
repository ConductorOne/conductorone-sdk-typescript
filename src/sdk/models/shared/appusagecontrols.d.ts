import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppUsageControls object describes some peripheral configuration for an app.
 */
export type AppUsageControls = {
    /**
     * The app that this object belongs to.
     */
    appId?: string | null | undefined;
    /**
     * Whether or not to notify some if they have access to the app, but has not used it within a configurable amount of time.
     */
    notify?: boolean | null | undefined;
    /**
     * The duration in days after which we notify users of nonusage.
     */
    notifyAfterDays?: number | null | undefined;
    /**
     * Whether or not to revoke a grant if they have access to the app, but has not used it within a configurable amount of time.
     */
    revoke?: boolean | null | undefined;
    /**
     * The duration in days after which we revoke users that have not used that grant.
     */
    revokeAfterDays?: number | null | undefined;
};
/** @internal */
export declare const AppUsageControls$inboundSchema: z.ZodType<AppUsageControls, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUsageControls$Outbound = {
    appId?: string | null | undefined;
    notify?: boolean | null | undefined;
    notifyAfterDays?: number | null | undefined;
    revoke?: boolean | null | undefined;
    revokeAfterDays?: number | null | undefined;
};
/** @internal */
export declare const AppUsageControls$outboundSchema: z.ZodType<AppUsageControls$Outbound, z.ZodTypeDef, AppUsageControls>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUsageControls$ {
    /** @deprecated use `AppUsageControls$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUsageControls, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUsageControls$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUsageControls$Outbound, z.ZodTypeDef, AppUsageControls>;
    /** @deprecated use `AppUsageControls$Outbound` instead. */
    type Outbound = AppUsageControls$Outbound;
}
export declare function appUsageControlsToJSON(appUsageControls: AppUsageControls): string;
export declare function appUsageControlsFromJSON(jsonString: string): SafeParseResult<AppUsageControls, SDKValidationError>;
