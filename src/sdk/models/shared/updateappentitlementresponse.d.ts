import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type UpdateAppEntitlementResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The UpdateAppEntitlementResponse message.
 */
export type UpdateAppEntitlementResponse = {
    appEntitlementView?: AppEntitlementView | null | undefined;
    /**
     * List of related objects
     */
    expanded?: Array<UpdateAppEntitlementResponseExpanded> | null | undefined;
};
/** @internal */
export declare const UpdateAppEntitlementResponseExpanded$inboundSchema: z.ZodType<UpdateAppEntitlementResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppEntitlementResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const UpdateAppEntitlementResponseExpanded$outboundSchema: z.ZodType<UpdateAppEntitlementResponseExpanded$Outbound, z.ZodTypeDef, UpdateAppEntitlementResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppEntitlementResponseExpanded$ {
    /** @deprecated use `UpdateAppEntitlementResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppEntitlementResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppEntitlementResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppEntitlementResponseExpanded$Outbound, z.ZodTypeDef, UpdateAppEntitlementResponseExpanded>;
    /** @deprecated use `UpdateAppEntitlementResponseExpanded$Outbound` instead. */
    type Outbound = UpdateAppEntitlementResponseExpanded$Outbound;
}
export declare function updateAppEntitlementResponseExpandedToJSON(updateAppEntitlementResponseExpanded: UpdateAppEntitlementResponseExpanded): string;
export declare function updateAppEntitlementResponseExpandedFromJSON(jsonString: string): SafeParseResult<UpdateAppEntitlementResponseExpanded, SDKValidationError>;
/** @internal */
export declare const UpdateAppEntitlementResponse$inboundSchema: z.ZodType<UpdateAppEntitlementResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppEntitlementResponse$Outbound = {
    appEntitlementView?: AppEntitlementView$Outbound | null | undefined;
    expanded?: Array<UpdateAppEntitlementResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const UpdateAppEntitlementResponse$outboundSchema: z.ZodType<UpdateAppEntitlementResponse$Outbound, z.ZodTypeDef, UpdateAppEntitlementResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppEntitlementResponse$ {
    /** @deprecated use `UpdateAppEntitlementResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppEntitlementResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppEntitlementResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppEntitlementResponse$Outbound, z.ZodTypeDef, UpdateAppEntitlementResponse>;
    /** @deprecated use `UpdateAppEntitlementResponse$Outbound` instead. */
    type Outbound = UpdateAppEntitlementResponse$Outbound;
}
export declare function updateAppEntitlementResponseToJSON(updateAppEntitlementResponse: UpdateAppEntitlementResponse): string;
export declare function updateAppEntitlementResponseFromJSON(jsonString: string): SafeParseResult<UpdateAppEntitlementResponse, SDKValidationError>;
