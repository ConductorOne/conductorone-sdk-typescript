import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { SecretTrait, SecretTrait$Outbound } from "./secrettrait.js";
/**
 * The app resource message is a single resource that can have entitlements.
 *
 * @remarks
 *
 * This message contains a oneof named metadata. Only a single field of the following list may be set at a time:
 *   - secretTrait
 */
export type AppResource = {
    /**
     * The app that this resource belongs to.
     */
    appId?: string | null | undefined;
    /**
     * The resource type that this resource is.
     */
    appResourceTypeId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * A custom description that can be set for a resource.
     */
    customDescription?: string | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description set for the resource.
     */
    description?: string | null | undefined;
    /**
     * The display name for this resource.
     */
    displayName?: string | null | undefined;
    /**
     * The number of grants to this resource.
     */
    grantCount?: number | null | undefined;
    /**
     * The id of the resource.
     */
    id?: string | null | undefined;
    /**
     * The matchBatonId field.
     */
    matchBatonId?: string | null | undefined;
    /**
     * The parent resource id, if this resource is a child of another resource.
     */
    parentAppResourceId?: string | null | undefined;
    /**
     * The parent resource type id, if this resource is a child of another resource.
     */
    parentAppResourceTypeId?: string | null | undefined;
    secretTrait?: SecretTrait | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppResource$inboundSchema: z.ZodType<AppResource, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResource$Outbound = {
    appId?: string | null | undefined;
    appResourceTypeId?: string | null | undefined;
    createdAt?: string | null | undefined;
    customDescription?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    grantCount?: string | null | undefined;
    id?: string | null | undefined;
    matchBatonId?: string | null | undefined;
    parentAppResourceId?: string | null | undefined;
    parentAppResourceTypeId?: string | null | undefined;
    secretTrait?: SecretTrait$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppResource$outboundSchema: z.ZodType<AppResource$Outbound, z.ZodTypeDef, AppResource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResource$ {
    /** @deprecated use `AppResource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResource, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResource$Outbound, z.ZodTypeDef, AppResource>;
    /** @deprecated use `AppResource$Outbound` instead. */
    type Outbound = AppResource$Outbound;
}
export declare function appResourceToJSON(appResource: AppResource): string;
export declare function appResourceFromJSON(jsonString: string): SafeParseResult<AppResource, SDKValidationError>;
