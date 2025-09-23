import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserView, AppUserView$Outbound } from "./appuserview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppUserServiceUpdateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppUserServiceUpdateResponse message.
 */
export type AppUserServiceUpdateResponse = {
    appUserView?: AppUserView | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<AppUserServiceUpdateResponseExpanded> | null | undefined;
};
/** @internal */
export declare const AppUserServiceUpdateResponseExpanded$inboundSchema: z.ZodType<AppUserServiceUpdateResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceUpdateResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppUserServiceUpdateResponseExpanded$outboundSchema: z.ZodType<AppUserServiceUpdateResponseExpanded$Outbound, z.ZodTypeDef, AppUserServiceUpdateResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceUpdateResponseExpanded$ {
    /** @deprecated use `AppUserServiceUpdateResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceUpdateResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceUpdateResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceUpdateResponseExpanded$Outbound, z.ZodTypeDef, AppUserServiceUpdateResponseExpanded>;
    /** @deprecated use `AppUserServiceUpdateResponseExpanded$Outbound` instead. */
    type Outbound = AppUserServiceUpdateResponseExpanded$Outbound;
}
export declare function appUserServiceUpdateResponseExpandedToJSON(appUserServiceUpdateResponseExpanded: AppUserServiceUpdateResponseExpanded): string;
export declare function appUserServiceUpdateResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppUserServiceUpdateResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppUserServiceUpdateResponse$inboundSchema: z.ZodType<AppUserServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceUpdateResponse$Outbound = {
    appUserView?: AppUserView$Outbound | null | undefined;
    expanded?: Array<AppUserServiceUpdateResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const AppUserServiceUpdateResponse$outboundSchema: z.ZodType<AppUserServiceUpdateResponse$Outbound, z.ZodTypeDef, AppUserServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceUpdateResponse$ {
    /** @deprecated use `AppUserServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceUpdateResponse$Outbound, z.ZodTypeDef, AppUserServiceUpdateResponse>;
    /** @deprecated use `AppUserServiceUpdateResponse$Outbound` instead. */
    type Outbound = AppUserServiceUpdateResponse$Outbound;
}
export declare function appUserServiceUpdateResponseToJSON(appUserServiceUpdateResponse: AppUserServiceUpdateResponse): string;
export declare function appUserServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<AppUserServiceUpdateResponse, SDKValidationError>;
