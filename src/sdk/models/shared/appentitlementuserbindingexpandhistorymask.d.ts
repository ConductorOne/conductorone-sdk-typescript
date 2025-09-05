import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementUserBindingExpandHistoryMask message.
 */
export type AppEntitlementUserBindingExpandHistoryMask = {
    /**
     * The paths field.
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingExpandHistoryMask$inboundSchema: z.ZodType<AppEntitlementUserBindingExpandHistoryMask, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserBindingExpandHistoryMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingExpandHistoryMask$outboundSchema: z.ZodType<AppEntitlementUserBindingExpandHistoryMask$Outbound, z.ZodTypeDef, AppEntitlementUserBindingExpandHistoryMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserBindingExpandHistoryMask$ {
    /** @deprecated use `AppEntitlementUserBindingExpandHistoryMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserBindingExpandHistoryMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserBindingExpandHistoryMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserBindingExpandHistoryMask$Outbound, z.ZodTypeDef, AppEntitlementUserBindingExpandHistoryMask>;
    /** @deprecated use `AppEntitlementUserBindingExpandHistoryMask$Outbound` instead. */
    type Outbound = AppEntitlementUserBindingExpandHistoryMask$Outbound;
}
export declare function appEntitlementUserBindingExpandHistoryMaskToJSON(appEntitlementUserBindingExpandHistoryMask: AppEntitlementUserBindingExpandHistoryMask): string;
export declare function appEntitlementUserBindingExpandHistoryMaskFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserBindingExpandHistoryMask, SDKValidationError>;
