import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceView, AppResourceView$Outbound } from "./appresourceview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppResourceServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The app resource service get response contains the app resource view and array of expanded items indicated by the request's expand mask.
 */
export type AppResourceServiceGetResponse = {
    appResourceView?: AppResourceView | null | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<AppResourceServiceGetResponseExpanded> | null | undefined;
};
/** @internal */
export declare const AppResourceServiceGetResponseExpanded$inboundSchema: z.ZodType<AppResourceServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppResourceServiceGetResponseExpanded$outboundSchema: z.ZodType<AppResourceServiceGetResponseExpanded$Outbound, z.ZodTypeDef, AppResourceServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceGetResponseExpanded$ {
    /** @deprecated use `AppResourceServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceGetResponseExpanded$Outbound, z.ZodTypeDef, AppResourceServiceGetResponseExpanded>;
    /** @deprecated use `AppResourceServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = AppResourceServiceGetResponseExpanded$Outbound;
}
export declare function appResourceServiceGetResponseExpandedToJSON(appResourceServiceGetResponseExpanded: AppResourceServiceGetResponseExpanded): string;
export declare function appResourceServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppResourceServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppResourceServiceGetResponse$inboundSchema: z.ZodType<AppResourceServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceGetResponse$Outbound = {
    appResourceView?: AppResourceView$Outbound | null | undefined;
    expanded?: Array<AppResourceServiceGetResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const AppResourceServiceGetResponse$outboundSchema: z.ZodType<AppResourceServiceGetResponse$Outbound, z.ZodTypeDef, AppResourceServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceGetResponse$ {
    /** @deprecated use `AppResourceServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceGetResponse$Outbound, z.ZodTypeDef, AppResourceServiceGetResponse>;
    /** @deprecated use `AppResourceServiceGetResponse$Outbound` instead. */
    type Outbound = AppResourceServiceGetResponse$Outbound;
}
export declare function appResourceServiceGetResponseToJSON(appResourceServiceGetResponse: AppResourceServiceGetResponse): string;
export declare function appResourceServiceGetResponseFromJSON(jsonString: string): SafeParseResult<AppResourceServiceGetResponse, SDKValidationError>;
