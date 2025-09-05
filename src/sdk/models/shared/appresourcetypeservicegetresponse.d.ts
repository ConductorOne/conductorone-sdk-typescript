import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceTypeView, AppResourceTypeView$Outbound } from "./appresourcetypeview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppResourceTypeServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppResourceTypeServiceGetResponse contains an expanded array containing the expanded values indicated by the expand mask
 *
 * @remarks
 *  in the request and an app resource type view containing the resource type and JSONPATHs indicating which objects are where in the expand mask.
 */
export type AppResourceTypeServiceGetResponse = {
    appResourceTypeView?: AppResourceTypeView | null | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<AppResourceTypeServiceGetResponseExpanded> | null | undefined;
};
/** @internal */
export declare const AppResourceTypeServiceGetResponseExpanded$inboundSchema: z.ZodType<AppResourceTypeServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceTypeServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppResourceTypeServiceGetResponseExpanded$outboundSchema: z.ZodType<AppResourceTypeServiceGetResponseExpanded$Outbound, z.ZodTypeDef, AppResourceTypeServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceTypeServiceGetResponseExpanded$ {
    /** @deprecated use `AppResourceTypeServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceTypeServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceTypeServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceTypeServiceGetResponseExpanded$Outbound, z.ZodTypeDef, AppResourceTypeServiceGetResponseExpanded>;
    /** @deprecated use `AppResourceTypeServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = AppResourceTypeServiceGetResponseExpanded$Outbound;
}
export declare function appResourceTypeServiceGetResponseExpandedToJSON(appResourceTypeServiceGetResponseExpanded: AppResourceTypeServiceGetResponseExpanded): string;
export declare function appResourceTypeServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppResourceTypeServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppResourceTypeServiceGetResponse$inboundSchema: z.ZodType<AppResourceTypeServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceTypeServiceGetResponse$Outbound = {
    appResourceTypeView?: AppResourceTypeView$Outbound | null | undefined;
    expanded?: Array<AppResourceTypeServiceGetResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const AppResourceTypeServiceGetResponse$outboundSchema: z.ZodType<AppResourceTypeServiceGetResponse$Outbound, z.ZodTypeDef, AppResourceTypeServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceTypeServiceGetResponse$ {
    /** @deprecated use `AppResourceTypeServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceTypeServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceTypeServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceTypeServiceGetResponse$Outbound, z.ZodTypeDef, AppResourceTypeServiceGetResponse>;
    /** @deprecated use `AppResourceTypeServiceGetResponse$Outbound` instead. */
    type Outbound = AppResourceTypeServiceGetResponse$Outbound;
}
export declare function appResourceTypeServiceGetResponseToJSON(appResourceTypeServiceGetResponse: AppResourceTypeServiceGetResponse): string;
export declare function appResourceTypeServiceGetResponseFromJSON(jsonString: string): SafeParseResult<AppResourceTypeServiceGetResponse, SDKValidationError>;
