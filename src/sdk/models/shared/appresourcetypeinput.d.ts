import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role.
 */
export type AppResourceTypeInput = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the app resource type.
     */
    displayName?: string | null | undefined;
    /**
     * Associated trait ids
     */
    traitIds?: Array<string> | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppResourceTypeInput$inboundSchema: z.ZodType<AppResourceTypeInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceTypeInput$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    traitIds?: Array<string> | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppResourceTypeInput$outboundSchema: z.ZodType<AppResourceTypeInput$Outbound, z.ZodTypeDef, AppResourceTypeInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceTypeInput$ {
    /** @deprecated use `AppResourceTypeInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceTypeInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceTypeInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceTypeInput$Outbound, z.ZodTypeDef, AppResourceTypeInput>;
    /** @deprecated use `AppResourceTypeInput$Outbound` instead. */
    type Outbound = AppResourceTypeInput$Outbound;
}
export declare function appResourceTypeInputToJSON(appResourceTypeInput: AppResourceTypeInput): string;
export declare function appResourceTypeInputFromJSON(jsonString: string): SafeParseResult<AppResourceTypeInput, SDKValidationError>;
