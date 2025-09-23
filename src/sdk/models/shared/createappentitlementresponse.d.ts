import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type CreateAppEntitlementResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The CreateAppEntitlementResponse message.
 */
export type CreateAppEntitlementResponse = {
    appEntitlementView?: AppEntitlementView | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<CreateAppEntitlementResponseExpanded> | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementResponseExpanded$inboundSchema: z.ZodType<CreateAppEntitlementResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const CreateAppEntitlementResponseExpanded$outboundSchema: z.ZodType<CreateAppEntitlementResponseExpanded$Outbound, z.ZodTypeDef, CreateAppEntitlementResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementResponseExpanded$ {
    /** @deprecated use `CreateAppEntitlementResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementResponseExpanded$Outbound, z.ZodTypeDef, CreateAppEntitlementResponseExpanded>;
    /** @deprecated use `CreateAppEntitlementResponseExpanded$Outbound` instead. */
    type Outbound = CreateAppEntitlementResponseExpanded$Outbound;
}
export declare function createAppEntitlementResponseExpandedToJSON(createAppEntitlementResponseExpanded: CreateAppEntitlementResponseExpanded): string;
export declare function createAppEntitlementResponseExpandedFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementResponseExpanded, SDKValidationError>;
/** @internal */
export declare const CreateAppEntitlementResponse$inboundSchema: z.ZodType<CreateAppEntitlementResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementResponse$Outbound = {
    appEntitlementView?: AppEntitlementView$Outbound | null | undefined;
    expanded?: Array<CreateAppEntitlementResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementResponse$outboundSchema: z.ZodType<CreateAppEntitlementResponse$Outbound, z.ZodTypeDef, CreateAppEntitlementResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementResponse$ {
    /** @deprecated use `CreateAppEntitlementResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementResponse$Outbound, z.ZodTypeDef, CreateAppEntitlementResponse>;
    /** @deprecated use `CreateAppEntitlementResponse$Outbound` instead. */
    type Outbound = CreateAppEntitlementResponse$Outbound;
}
export declare function createAppEntitlementResponseToJSON(createAppEntitlementResponse: CreateAppEntitlementResponse): string;
export declare function createAppEntitlementResponseFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementResponse, SDKValidationError>;
