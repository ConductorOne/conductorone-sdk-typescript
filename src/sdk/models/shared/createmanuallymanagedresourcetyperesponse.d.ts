import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceType, AppResourceType$Outbound } from "./appresourcetype.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type CreateManuallyManagedResourceTypeResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The CreateManuallyManagedResourceTypeResponse message.
 */
export type CreateManuallyManagedResourceTypeResponse = {
    appResourceType?: AppResourceType | null | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<CreateManuallyManagedResourceTypeResponseExpanded> | null | undefined;
};
/** @internal */
export declare const CreateManuallyManagedResourceTypeResponseExpanded$inboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateManuallyManagedResourceTypeResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const CreateManuallyManagedResourceTypeResponseExpanded$outboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponseExpanded$Outbound, z.ZodTypeDef, CreateManuallyManagedResourceTypeResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateManuallyManagedResourceTypeResponseExpanded$ {
    /** @deprecated use `CreateManuallyManagedResourceTypeResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateManuallyManagedResourceTypeResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponseExpanded$Outbound, z.ZodTypeDef, CreateManuallyManagedResourceTypeResponseExpanded>;
    /** @deprecated use `CreateManuallyManagedResourceTypeResponseExpanded$Outbound` instead. */
    type Outbound = CreateManuallyManagedResourceTypeResponseExpanded$Outbound;
}
export declare function createManuallyManagedResourceTypeResponseExpandedToJSON(createManuallyManagedResourceTypeResponseExpanded: CreateManuallyManagedResourceTypeResponseExpanded): string;
export declare function createManuallyManagedResourceTypeResponseExpandedFromJSON(jsonString: string): SafeParseResult<CreateManuallyManagedResourceTypeResponseExpanded, SDKValidationError>;
/** @internal */
export declare const CreateManuallyManagedResourceTypeResponse$inboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateManuallyManagedResourceTypeResponse$Outbound = {
    appResourceType?: AppResourceType$Outbound | null | undefined;
    expanded?: Array<CreateManuallyManagedResourceTypeResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const CreateManuallyManagedResourceTypeResponse$outboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, CreateManuallyManagedResourceTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateManuallyManagedResourceTypeResponse$ {
    /** @deprecated use `CreateManuallyManagedResourceTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateManuallyManagedResourceTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, CreateManuallyManagedResourceTypeResponse>;
    /** @deprecated use `CreateManuallyManagedResourceTypeResponse$Outbound` instead. */
    type Outbound = CreateManuallyManagedResourceTypeResponse$Outbound;
}
export declare function createManuallyManagedResourceTypeResponseToJSON(createManuallyManagedResourceTypeResponse: CreateManuallyManagedResourceTypeResponse): string;
export declare function createManuallyManagedResourceTypeResponseFromJSON(jsonString: string): SafeParseResult<CreateManuallyManagedResourceTypeResponse, SDKValidationError>;
