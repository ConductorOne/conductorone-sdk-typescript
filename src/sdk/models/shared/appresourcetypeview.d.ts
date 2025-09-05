import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceType, AppResourceType$Outbound } from "./appresourcetype.js";
/**
 * The AppResourceTypeView message.
 */
export type AppResourceTypeView = {
    /**
     * JSONPATH expression indicating the location of the App object in the  array
     */
    appPath?: string | null | undefined;
    appResourceType?: AppResourceType | null | undefined;
};
/** @internal */
export declare const AppResourceTypeView$inboundSchema: z.ZodType<AppResourceTypeView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceTypeView$Outbound = {
    appPath?: string | null | undefined;
    appResourceType?: AppResourceType$Outbound | null | undefined;
};
/** @internal */
export declare const AppResourceTypeView$outboundSchema: z.ZodType<AppResourceTypeView$Outbound, z.ZodTypeDef, AppResourceTypeView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceTypeView$ {
    /** @deprecated use `AppResourceTypeView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceTypeView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceTypeView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceTypeView$Outbound, z.ZodTypeDef, AppResourceTypeView>;
    /** @deprecated use `AppResourceTypeView$Outbound` instead. */
    type Outbound = AppResourceTypeView$Outbound;
}
export declare function appResourceTypeViewToJSON(appResourceTypeView: AppResourceTypeView): string;
export declare function appResourceTypeViewFromJSON(jsonString: string): SafeParseResult<AppResourceTypeView, SDKValidationError>;
