import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserView, AppUserView$Outbound } from "./appuserview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Expanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppUserServiceListResponse message.
 */
export type AppUserServiceListResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<Expanded> | null | undefined;
    /**
     * The list field.
     */
    list?: Array<AppUserView> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const Expanded$inboundSchema: z.ZodType<Expanded, z.ZodTypeDef, unknown>;
/** @internal */
export type Expanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const Expanded$outboundSchema: z.ZodType<Expanded$Outbound, z.ZodTypeDef, Expanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Expanded$ {
    /** @deprecated use `Expanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Expanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `Expanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Expanded$Outbound, z.ZodTypeDef, Expanded>;
    /** @deprecated use `Expanded$Outbound` instead. */
    type Outbound = Expanded$Outbound;
}
export declare function expandedToJSON(expanded: Expanded): string;
export declare function expandedFromJSON(jsonString: string): SafeParseResult<Expanded, SDKValidationError>;
/** @internal */
export declare const AppUserServiceListResponse$inboundSchema: z.ZodType<AppUserServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceListResponse$Outbound = {
    expanded?: Array<Expanded$Outbound> | null | undefined;
    list?: Array<AppUserView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceListResponse$outboundSchema: z.ZodType<AppUserServiceListResponse$Outbound, z.ZodTypeDef, AppUserServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceListResponse$ {
    /** @deprecated use `AppUserServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceListResponse$Outbound, z.ZodTypeDef, AppUserServiceListResponse>;
    /** @deprecated use `AppUserServiceListResponse$Outbound` instead. */
    type Outbound = AppUserServiceListResponse$Outbound;
}
export declare function appUserServiceListResponseToJSON(appUserServiceListResponse: AppUserServiceListResponse): string;
export declare function appUserServiceListResponseFromJSON(jsonString: string): SafeParseResult<AppUserServiceListResponse, SDKValidationError>;
