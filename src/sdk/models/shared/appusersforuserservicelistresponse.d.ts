import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserView, AppUserView$Outbound } from "./appuserview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppUsersForUserServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppUsersForUserServiceListResponse message.
 */
export type AppUsersForUserServiceListResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<AppUsersForUserServiceListResponseExpanded> | null | undefined;
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
export declare const AppUsersForUserServiceListResponseExpanded$inboundSchema: z.ZodType<AppUsersForUserServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUsersForUserServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppUsersForUserServiceListResponseExpanded$outboundSchema: z.ZodType<AppUsersForUserServiceListResponseExpanded$Outbound, z.ZodTypeDef, AppUsersForUserServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUsersForUserServiceListResponseExpanded$ {
    /** @deprecated use `AppUsersForUserServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUsersForUserServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUsersForUserServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUsersForUserServiceListResponseExpanded$Outbound, z.ZodTypeDef, AppUsersForUserServiceListResponseExpanded>;
    /** @deprecated use `AppUsersForUserServiceListResponseExpanded$Outbound` instead. */
    type Outbound = AppUsersForUserServiceListResponseExpanded$Outbound;
}
export declare function appUsersForUserServiceListResponseExpandedToJSON(appUsersForUserServiceListResponseExpanded: AppUsersForUserServiceListResponseExpanded): string;
export declare function appUsersForUserServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppUsersForUserServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppUsersForUserServiceListResponse$inboundSchema: z.ZodType<AppUsersForUserServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUsersForUserServiceListResponse$Outbound = {
    expanded?: Array<AppUsersForUserServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppUserView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppUsersForUserServiceListResponse$outboundSchema: z.ZodType<AppUsersForUserServiceListResponse$Outbound, z.ZodTypeDef, AppUsersForUserServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUsersForUserServiceListResponse$ {
    /** @deprecated use `AppUsersForUserServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUsersForUserServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUsersForUserServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUsersForUserServiceListResponse$Outbound, z.ZodTypeDef, AppUsersForUserServiceListResponse>;
    /** @deprecated use `AppUsersForUserServiceListResponse$Outbound` instead. */
    type Outbound = AppUsersForUserServiceListResponse$Outbound;
}
export declare function appUsersForUserServiceListResponseToJSON(appUsersForUserServiceListResponse: AppUsersForUserServiceListResponse): string;
export declare function appUsersForUserServiceListResponseFromJSON(jsonString: string): SafeParseResult<AppUsersForUserServiceListResponse, SDKValidationError>;
