import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceView, AppResourceView$Outbound } from "./appresourceview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppResourceServiceUpdateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppResourceServiceUpdateResponse message.
 */
export type AppResourceServiceUpdateResponse = {
    appResourceView?: AppResourceView | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<AppResourceServiceUpdateResponseExpanded> | null | undefined;
};
/** @internal */
export declare const AppResourceServiceUpdateResponseExpanded$inboundSchema: z.ZodType<AppResourceServiceUpdateResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceUpdateResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppResourceServiceUpdateResponseExpanded$outboundSchema: z.ZodType<AppResourceServiceUpdateResponseExpanded$Outbound, z.ZodTypeDef, AppResourceServiceUpdateResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceUpdateResponseExpanded$ {
    /** @deprecated use `AppResourceServiceUpdateResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceUpdateResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceUpdateResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceUpdateResponseExpanded$Outbound, z.ZodTypeDef, AppResourceServiceUpdateResponseExpanded>;
    /** @deprecated use `AppResourceServiceUpdateResponseExpanded$Outbound` instead. */
    type Outbound = AppResourceServiceUpdateResponseExpanded$Outbound;
}
export declare function appResourceServiceUpdateResponseExpandedToJSON(appResourceServiceUpdateResponseExpanded: AppResourceServiceUpdateResponseExpanded): string;
export declare function appResourceServiceUpdateResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppResourceServiceUpdateResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppResourceServiceUpdateResponse$inboundSchema: z.ZodType<AppResourceServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceUpdateResponse$Outbound = {
    appResourceView?: AppResourceView$Outbound | null | undefined;
    expanded?: Array<AppResourceServiceUpdateResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const AppResourceServiceUpdateResponse$outboundSchema: z.ZodType<AppResourceServiceUpdateResponse$Outbound, z.ZodTypeDef, AppResourceServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceUpdateResponse$ {
    /** @deprecated use `AppResourceServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceUpdateResponse$Outbound, z.ZodTypeDef, AppResourceServiceUpdateResponse>;
    /** @deprecated use `AppResourceServiceUpdateResponse$Outbound` instead. */
    type Outbound = AppResourceServiceUpdateResponse$Outbound;
}
export declare function appResourceServiceUpdateResponseToJSON(appResourceServiceUpdateResponse: AppResourceServiceUpdateResponse): string;
export declare function appResourceServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<AppResourceServiceUpdateResponse, SDKValidationError>;
