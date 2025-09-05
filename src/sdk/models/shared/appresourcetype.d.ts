import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role.
 */
export type AppResourceType = {
    /**
     * The ID of the app that is associated with the app resource type
     */
    appId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the app resource type.
     */
    displayName?: string | null | undefined;
    /**
     * The unique ID for the app resource type.
     */
    id?: string | null | undefined;
    /**
     * Associated trait ids
     */
    traitIds?: Array<string> | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppResourceType$inboundSchema: z.ZodType<AppResourceType, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceType$Outbound = {
    appId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    id?: string | null | undefined;
    traitIds?: Array<string> | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppResourceType$outboundSchema: z.ZodType<AppResourceType$Outbound, z.ZodTypeDef, AppResourceType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceType$ {
    /** @deprecated use `AppResourceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceType, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceType$Outbound, z.ZodTypeDef, AppResourceType>;
    /** @deprecated use `AppResourceType$Outbound` instead. */
    type Outbound = AppResourceType$Outbound;
}
export declare function appResourceTypeToJSON(appResourceType: AppResourceType): string;
export declare function appResourceTypeFromJSON(jsonString: string): SafeParseResult<AppResourceType, SDKValidationError>;
