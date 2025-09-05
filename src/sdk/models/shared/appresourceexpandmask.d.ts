import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The app resource expand mask lets you get information about related objects from the request.
 */
export type AppResourceExpandMask = {
    /**
     * The app resource expanded fields. Maybe be any combination of "*", "app_id", "app_resource_type_id".
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppResourceExpandMask$inboundSchema: z.ZodType<AppResourceExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppResourceExpandMask$outboundSchema: z.ZodType<AppResourceExpandMask$Outbound, z.ZodTypeDef, AppResourceExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceExpandMask$ {
    /** @deprecated use `AppResourceExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceExpandMask$Outbound, z.ZodTypeDef, AppResourceExpandMask>;
    /** @deprecated use `AppResourceExpandMask$Outbound` instead. */
    type Outbound = AppResourceExpandMask$Outbound;
}
export declare function appResourceExpandMaskToJSON(appResourceExpandMask: AppResourceExpandMask): string;
export declare function appResourceExpandMaskFromJSON(jsonString: string): SafeParseResult<AppResourceExpandMask, SDKValidationError>;
