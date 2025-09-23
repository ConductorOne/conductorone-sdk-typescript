import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementProxyView, AppEntitlementProxyView$Outbound } from "./appentitlementproxyview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type GetAppEntitlementProxyResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The GetAppEntitlementProxyResponse message.
 */
export type GetAppEntitlementProxyResponse = {
    appProxyEntitlementView?: AppEntitlementProxyView | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<GetAppEntitlementProxyResponseExpanded> | null | undefined;
};
/** @internal */
export declare const GetAppEntitlementProxyResponseExpanded$inboundSchema: z.ZodType<GetAppEntitlementProxyResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppEntitlementProxyResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const GetAppEntitlementProxyResponseExpanded$outboundSchema: z.ZodType<GetAppEntitlementProxyResponseExpanded$Outbound, z.ZodTypeDef, GetAppEntitlementProxyResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppEntitlementProxyResponseExpanded$ {
    /** @deprecated use `GetAppEntitlementProxyResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppEntitlementProxyResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppEntitlementProxyResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppEntitlementProxyResponseExpanded$Outbound, z.ZodTypeDef, GetAppEntitlementProxyResponseExpanded>;
    /** @deprecated use `GetAppEntitlementProxyResponseExpanded$Outbound` instead. */
    type Outbound = GetAppEntitlementProxyResponseExpanded$Outbound;
}
export declare function getAppEntitlementProxyResponseExpandedToJSON(getAppEntitlementProxyResponseExpanded: GetAppEntitlementProxyResponseExpanded): string;
export declare function getAppEntitlementProxyResponseExpandedFromJSON(jsonString: string): SafeParseResult<GetAppEntitlementProxyResponseExpanded, SDKValidationError>;
/** @internal */
export declare const GetAppEntitlementProxyResponse$inboundSchema: z.ZodType<GetAppEntitlementProxyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppEntitlementProxyResponse$Outbound = {
    appProxyEntitlementView?: AppEntitlementProxyView$Outbound | null | undefined;
    expanded?: Array<GetAppEntitlementProxyResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const GetAppEntitlementProxyResponse$outboundSchema: z.ZodType<GetAppEntitlementProxyResponse$Outbound, z.ZodTypeDef, GetAppEntitlementProxyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppEntitlementProxyResponse$ {
    /** @deprecated use `GetAppEntitlementProxyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppEntitlementProxyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppEntitlementProxyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppEntitlementProxyResponse$Outbound, z.ZodTypeDef, GetAppEntitlementProxyResponse>;
    /** @deprecated use `GetAppEntitlementProxyResponse$Outbound` instead. */
    type Outbound = GetAppEntitlementProxyResponse$Outbound;
}
export declare function getAppEntitlementProxyResponseToJSON(getAppEntitlementProxyResponse: GetAppEntitlementProxyResponse): string;
export declare function getAppEntitlementProxyResponseFromJSON(jsonString: string): SafeParseResult<GetAppEntitlementProxyResponse, SDKValidationError>;
