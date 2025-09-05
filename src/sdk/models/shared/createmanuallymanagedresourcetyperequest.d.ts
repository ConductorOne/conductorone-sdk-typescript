import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The resourceType field.
 */
export declare const ResourceType: {
    readonly Role: "ROLE";
    readonly Group: "GROUP";
    readonly License: "LICENSE";
    readonly Project: "PROJECT";
    readonly Catalog: "CATALOG";
    readonly Custom: "CUSTOM";
    readonly Vault: "VAULT";
};
/**
 * The resourceType field.
 */
export type ResourceType = OpenEnum<typeof ResourceType>;
/**
 * The CreateManuallyManagedResourceTypeRequest message.
 */
export type CreateManuallyManagedResourceTypeRequest = {
    /**
     * The displayName field.
     */
    displayName: string;
    /**
     * The resourceType field.
     */
    resourceType: ResourceType;
};
/** @internal */
export declare const ResourceType$inboundSchema: z.ZodType<ResourceType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ResourceType$outboundSchema: z.ZodType<ResourceType, z.ZodTypeDef, ResourceType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResourceType$ {
    /** @deprecated use `ResourceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResourceType, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResourceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResourceType, z.ZodTypeDef, ResourceType>;
}
/** @internal */
export declare const CreateManuallyManagedResourceTypeRequest$inboundSchema: z.ZodType<CreateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateManuallyManagedResourceTypeRequest$Outbound = {
    displayName: string;
    resourceType: string;
};
/** @internal */
export declare const CreateManuallyManagedResourceTypeRequest$outboundSchema: z.ZodType<CreateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, CreateManuallyManagedResourceTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateManuallyManagedResourceTypeRequest$ {
    /** @deprecated use `CreateManuallyManagedResourceTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateManuallyManagedResourceTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, CreateManuallyManagedResourceTypeRequest>;
    /** @deprecated use `CreateManuallyManagedResourceTypeRequest$Outbound` instead. */
    type Outbound = CreateManuallyManagedResourceTypeRequest$Outbound;
}
export declare function createManuallyManagedResourceTypeRequestToJSON(createManuallyManagedResourceTypeRequest: CreateManuallyManagedResourceTypeRequest): string;
export declare function createManuallyManagedResourceTypeRequestFromJSON(jsonString: string): SafeParseResult<CreateManuallyManagedResourceTypeRequest, SDKValidationError>;
