import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppManagedStateBindingRef message.
 */
export type AppManagedStateBindingRef = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The resourceId field.
     */
    resourceId?: string | null | undefined;
    /**
     * The resourceTypeId field.
     */
    resourceTypeId?: string | null | undefined;
};
/** @internal */
export declare const AppManagedStateBindingRef$inboundSchema: z.ZodType<AppManagedStateBindingRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AppManagedStateBindingRef$Outbound = {
    appId?: string | null | undefined;
    resourceId?: string | null | undefined;
    resourceTypeId?: string | null | undefined;
};
/** @internal */
export declare const AppManagedStateBindingRef$outboundSchema: z.ZodType<AppManagedStateBindingRef$Outbound, z.ZodTypeDef, AppManagedStateBindingRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppManagedStateBindingRef$ {
    /** @deprecated use `AppManagedStateBindingRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppManagedStateBindingRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppManagedStateBindingRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppManagedStateBindingRef$Outbound, z.ZodTypeDef, AppManagedStateBindingRef>;
    /** @deprecated use `AppManagedStateBindingRef$Outbound` instead. */
    type Outbound = AppManagedStateBindingRef$Outbound;
}
export declare function appManagedStateBindingRefToJSON(appManagedStateBindingRef: AppManagedStateBindingRef): string;
export declare function appManagedStateBindingRefFromJSON(jsonString: string): SafeParseResult<AppManagedStateBindingRef, SDKValidationError>;
