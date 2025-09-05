import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceType, AppResourceType$Outbound } from "./appresourcetype.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type UpdateManuallyManagedResourceTypeResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The UpdateManuallyManagedResourceTypeResponse message.
 */
export type UpdateManuallyManagedResourceTypeResponse = {
    appResourceType?: AppResourceType | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<UpdateManuallyManagedResourceTypeResponseExpanded> | null | undefined;
};
/** @internal */
export declare const UpdateManuallyManagedResourceTypeResponseExpanded$inboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateManuallyManagedResourceTypeResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const UpdateManuallyManagedResourceTypeResponseExpanded$outboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponseExpanded$Outbound, z.ZodTypeDef, UpdateManuallyManagedResourceTypeResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateManuallyManagedResourceTypeResponseExpanded$ {
    /** @deprecated use `UpdateManuallyManagedResourceTypeResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateManuallyManagedResourceTypeResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponseExpanded$Outbound, z.ZodTypeDef, UpdateManuallyManagedResourceTypeResponseExpanded>;
    /** @deprecated use `UpdateManuallyManagedResourceTypeResponseExpanded$Outbound` instead. */
    type Outbound = UpdateManuallyManagedResourceTypeResponseExpanded$Outbound;
}
export declare function updateManuallyManagedResourceTypeResponseExpandedToJSON(updateManuallyManagedResourceTypeResponseExpanded: UpdateManuallyManagedResourceTypeResponseExpanded): string;
export declare function updateManuallyManagedResourceTypeResponseExpandedFromJSON(jsonString: string): SafeParseResult<UpdateManuallyManagedResourceTypeResponseExpanded, SDKValidationError>;
/** @internal */
export declare const UpdateManuallyManagedResourceTypeResponse$inboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateManuallyManagedResourceTypeResponse$Outbound = {
    appResourceType?: AppResourceType$Outbound | null | undefined;
    expanded?: Array<UpdateManuallyManagedResourceTypeResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const UpdateManuallyManagedResourceTypeResponse$outboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, UpdateManuallyManagedResourceTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateManuallyManagedResourceTypeResponse$ {
    /** @deprecated use `UpdateManuallyManagedResourceTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateManuallyManagedResourceTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, UpdateManuallyManagedResourceTypeResponse>;
    /** @deprecated use `UpdateManuallyManagedResourceTypeResponse$Outbound` instead. */
    type Outbound = UpdateManuallyManagedResourceTypeResponse$Outbound;
}
export declare function updateManuallyManagedResourceTypeResponseToJSON(updateManuallyManagedResourceTypeResponse: UpdateManuallyManagedResourceTypeResponse): string;
export declare function updateManuallyManagedResourceTypeResponseFromJSON(jsonString: string): SafeParseResult<UpdateManuallyManagedResourceTypeResponse, SDKValidationError>;
