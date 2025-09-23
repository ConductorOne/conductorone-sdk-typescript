import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementProxyView, AppEntitlementProxyView$Outbound } from "./appentitlementproxyview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type CreateAppEntitlementProxyResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The CreateAppEntitlementProxyResponse message.
 */
export type CreateAppEntitlementProxyResponse = {
    appProxyEntitlementView?: AppEntitlementProxyView | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<CreateAppEntitlementProxyResponseExpanded> | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementProxyResponseExpanded$inboundSchema: z.ZodType<CreateAppEntitlementProxyResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementProxyResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const CreateAppEntitlementProxyResponseExpanded$outboundSchema: z.ZodType<CreateAppEntitlementProxyResponseExpanded$Outbound, z.ZodTypeDef, CreateAppEntitlementProxyResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementProxyResponseExpanded$ {
    /** @deprecated use `CreateAppEntitlementProxyResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementProxyResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementProxyResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementProxyResponseExpanded$Outbound, z.ZodTypeDef, CreateAppEntitlementProxyResponseExpanded>;
    /** @deprecated use `CreateAppEntitlementProxyResponseExpanded$Outbound` instead. */
    type Outbound = CreateAppEntitlementProxyResponseExpanded$Outbound;
}
export declare function createAppEntitlementProxyResponseExpandedToJSON(createAppEntitlementProxyResponseExpanded: CreateAppEntitlementProxyResponseExpanded): string;
export declare function createAppEntitlementProxyResponseExpandedFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementProxyResponseExpanded, SDKValidationError>;
/** @internal */
export declare const CreateAppEntitlementProxyResponse$inboundSchema: z.ZodType<CreateAppEntitlementProxyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementProxyResponse$Outbound = {
    appProxyEntitlementView?: AppEntitlementProxyView$Outbound | null | undefined;
    expanded?: Array<CreateAppEntitlementProxyResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementProxyResponse$outboundSchema: z.ZodType<CreateAppEntitlementProxyResponse$Outbound, z.ZodTypeDef, CreateAppEntitlementProxyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementProxyResponse$ {
    /** @deprecated use `CreateAppEntitlementProxyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementProxyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementProxyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementProxyResponse$Outbound, z.ZodTypeDef, CreateAppEntitlementProxyResponse>;
    /** @deprecated use `CreateAppEntitlementProxyResponse$Outbound` instead. */
    type Outbound = CreateAppEntitlementProxyResponse$Outbound;
}
export declare function createAppEntitlementProxyResponseToJSON(createAppEntitlementProxyResponse: CreateAppEntitlementProxyResponse): string;
export declare function createAppEntitlementProxyResponseFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementProxyResponse, SDKValidationError>;
