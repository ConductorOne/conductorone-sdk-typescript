import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementProxyExpandMask message.
 */
export type AppEntitlementProxyExpandMask = {
    /**
     * The paths field.
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppEntitlementProxyExpandMask$inboundSchema: z.ZodType<AppEntitlementProxyExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementProxyExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppEntitlementProxyExpandMask$outboundSchema: z.ZodType<AppEntitlementProxyExpandMask$Outbound, z.ZodTypeDef, AppEntitlementProxyExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementProxyExpandMask$ {
    /** @deprecated use `AppEntitlementProxyExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementProxyExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementProxyExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementProxyExpandMask$Outbound, z.ZodTypeDef, AppEntitlementProxyExpandMask>;
    /** @deprecated use `AppEntitlementProxyExpandMask$Outbound` instead. */
    type Outbound = AppEntitlementProxyExpandMask$Outbound;
}
export declare function appEntitlementProxyExpandMaskToJSON(appEntitlementProxyExpandMask: AppEntitlementProxyExpandMask): string;
export declare function appEntitlementProxyExpandMaskFromJSON(jsonString: string): SafeParseResult<AppEntitlementProxyExpandMask, SDKValidationError>;
