import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CreateManuallyManagedAppResourceRequest message.
 */
export type CreateManuallyManagedAppResourceRequest = {
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName: string;
    /**
     * If supplied, it's implied that the resource is created before sync and needs to be merged with connector resource.
     */
    matchBatonId?: string | null | undefined;
    /**
     * The resourceOwnerUserIds field.
     */
    resourceOwnerUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const CreateManuallyManagedAppResourceRequest$inboundSchema: z.ZodType<CreateManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateManuallyManagedAppResourceRequest$Outbound = {
    description?: string | null | undefined;
    displayName: string;
    matchBatonId?: string | null | undefined;
    resourceOwnerUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const CreateManuallyManagedAppResourceRequest$outboundSchema: z.ZodType<CreateManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, CreateManuallyManagedAppResourceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateManuallyManagedAppResourceRequest$ {
    /** @deprecated use `CreateManuallyManagedAppResourceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateManuallyManagedAppResourceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, CreateManuallyManagedAppResourceRequest>;
    /** @deprecated use `CreateManuallyManagedAppResourceRequest$Outbound` instead. */
    type Outbound = CreateManuallyManagedAppResourceRequest$Outbound;
}
export declare function createManuallyManagedAppResourceRequestToJSON(createManuallyManagedAppResourceRequest: CreateManuallyManagedAppResourceRequest): string;
export declare function createManuallyManagedAppResourceRequestFromJSON(jsonString: string): SafeParseResult<CreateManuallyManagedAppResourceRequest, SDKValidationError>;
