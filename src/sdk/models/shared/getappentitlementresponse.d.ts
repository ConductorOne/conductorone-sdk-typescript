import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type GetAppEntitlementResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The get app entitlement response returns an entitlement view containing paths in the expanded array for the objects expanded as indicated by the expand mask in the request.
 */
export type GetAppEntitlementResponse = {
    appEntitlementView?: AppEntitlementView | null | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<GetAppEntitlementResponseExpanded> | null | undefined;
};
/** @internal */
export declare const GetAppEntitlementResponseExpanded$inboundSchema: z.ZodType<GetAppEntitlementResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppEntitlementResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const GetAppEntitlementResponseExpanded$outboundSchema: z.ZodType<GetAppEntitlementResponseExpanded$Outbound, z.ZodTypeDef, GetAppEntitlementResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppEntitlementResponseExpanded$ {
    /** @deprecated use `GetAppEntitlementResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppEntitlementResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppEntitlementResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppEntitlementResponseExpanded$Outbound, z.ZodTypeDef, GetAppEntitlementResponseExpanded>;
    /** @deprecated use `GetAppEntitlementResponseExpanded$Outbound` instead. */
    type Outbound = GetAppEntitlementResponseExpanded$Outbound;
}
export declare function getAppEntitlementResponseExpandedToJSON(getAppEntitlementResponseExpanded: GetAppEntitlementResponseExpanded): string;
export declare function getAppEntitlementResponseExpandedFromJSON(jsonString: string): SafeParseResult<GetAppEntitlementResponseExpanded, SDKValidationError>;
/** @internal */
export declare const GetAppEntitlementResponse$inboundSchema: z.ZodType<GetAppEntitlementResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppEntitlementResponse$Outbound = {
    appEntitlementView?: AppEntitlementView$Outbound | null | undefined;
    expanded?: Array<GetAppEntitlementResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const GetAppEntitlementResponse$outboundSchema: z.ZodType<GetAppEntitlementResponse$Outbound, z.ZodTypeDef, GetAppEntitlementResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppEntitlementResponse$ {
    /** @deprecated use `GetAppEntitlementResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppEntitlementResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppEntitlementResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppEntitlementResponse$Outbound, z.ZodTypeDef, GetAppEntitlementResponse>;
    /** @deprecated use `GetAppEntitlementResponse$Outbound` instead. */
    type Outbound = GetAppEntitlementResponse$Outbound;
}
export declare function getAppEntitlementResponseToJSON(getAppEntitlementResponse: GetAppEntitlementResponse): string;
export declare function getAppEntitlementResponseFromJSON(jsonString: string): SafeParseResult<GetAppEntitlementResponse, SDKValidationError>;
