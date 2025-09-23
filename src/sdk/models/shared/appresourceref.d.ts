import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppResourceRef message.
 */
export type AppResourceRef = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The appResourceTypeId field.
     */
    appResourceTypeId?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const AppResourceRef$inboundSchema: z.ZodType<AppResourceRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceRef$Outbound = {
    appId?: string | null | undefined;
    appResourceTypeId?: string | null | undefined;
    id?: string | null | undefined;
};
/** @internal */
export declare const AppResourceRef$outboundSchema: z.ZodType<AppResourceRef$Outbound, z.ZodTypeDef, AppResourceRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceRef$ {
    /** @deprecated use `AppResourceRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceRef$Outbound, z.ZodTypeDef, AppResourceRef>;
    /** @deprecated use `AppResourceRef$Outbound` instead. */
    type Outbound = AppResourceRef$Outbound;
}
export declare function appResourceRefToJSON(appResourceRef: AppResourceRef): string;
export declare function appResourceRefFromJSON(jsonString: string): SafeParseResult<AppResourceRef, SDKValidationError>;
