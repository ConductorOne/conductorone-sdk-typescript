import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementWithUserBinding, AppEntitlementWithUserBinding$Outbound } from "./appentitlementwithuserbinding.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppEntitlementSearchServiceSearchGrantsResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppEntitlementSearchServiceSearchGrantsResponse message.
 */
export type AppEntitlementSearchServiceSearchGrantsResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<AppEntitlementSearchServiceSearchGrantsResponseExpanded> | null | undefined;
    /**
     * The list field.
     */
    list?: Array<AppEntitlementWithUserBinding> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchGrantsResponseExpanded$inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementSearchServiceSearchGrantsResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchGrantsResponseExpanded$outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponseExpanded$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchGrantsResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementSearchServiceSearchGrantsResponseExpanded$ {
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponseExpanded$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchGrantsResponseExpanded>;
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsResponseExpanded$Outbound` instead. */
    type Outbound = AppEntitlementSearchServiceSearchGrantsResponseExpanded$Outbound;
}
export declare function appEntitlementSearchServiceSearchGrantsResponseExpandedToJSON(appEntitlementSearchServiceSearchGrantsResponseExpanded: AppEntitlementSearchServiceSearchGrantsResponseExpanded): string;
export declare function appEntitlementSearchServiceSearchGrantsResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppEntitlementSearchServiceSearchGrantsResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppEntitlementSearchServiceSearchGrantsResponse$inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementSearchServiceSearchGrantsResponse$Outbound = {
    expanded?: Array<AppEntitlementSearchServiceSearchGrantsResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementWithUserBinding$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchGrantsResponse$outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponse$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchGrantsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementSearchServiceSearchGrantsResponse$ {
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsResponse$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchGrantsResponse>;
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsResponse$Outbound` instead. */
    type Outbound = AppEntitlementSearchServiceSearchGrantsResponse$Outbound;
}
export declare function appEntitlementSearchServiceSearchGrantsResponseToJSON(appEntitlementSearchServiceSearchGrantsResponse: AppEntitlementSearchServiceSearchGrantsResponse): string;
export declare function appEntitlementSearchServiceSearchGrantsResponseFromJSON(jsonString: string): SafeParseResult<AppEntitlementSearchServiceSearchGrantsResponse, SDKValidationError>;
