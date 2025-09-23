import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResource, AppResource$Outbound } from "./appresource.js";
/**
 * The app resource view returns an app resource with paths for items in the expand mask filled in when this response is returned and a request expand mask has "*" or "app_id" or "resource_type_id".
 */
export type AppResourceView = {
    /**
     * JSONPATH expression indicating the location of the App object in the array
     */
    appPath?: string | null | undefined;
    appResource?: AppResource | null | undefined;
    /**
     * JSONPATH expression indicating the location of the Parent Resource object in the array
     */
    parentResourcePath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the Parent Resource Type object in the array
     */
    parentResourceTypePath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the Resource Type object in the array
     */
    resourceTypePath?: string | null | undefined;
};
/** @internal */
export declare const AppResourceView$inboundSchema: z.ZodType<AppResourceView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceView$Outbound = {
    appPath?: string | null | undefined;
    appResource?: AppResource$Outbound | null | undefined;
    parentResourcePath?: string | null | undefined;
    parentResourceTypePath?: string | null | undefined;
    resourceTypePath?: string | null | undefined;
};
/** @internal */
export declare const AppResourceView$outboundSchema: z.ZodType<AppResourceView$Outbound, z.ZodTypeDef, AppResourceView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceView$ {
    /** @deprecated use `AppResourceView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceView$Outbound, z.ZodTypeDef, AppResourceView>;
    /** @deprecated use `AppResourceView$Outbound` instead. */
    type Outbound = AppResourceView$Outbound;
}
export declare function appResourceViewToJSON(appResourceView: AppResourceView): string;
export declare function appResourceViewFromJSON(jsonString: string): SafeParseResult<AppResourceView, SDKValidationError>;
