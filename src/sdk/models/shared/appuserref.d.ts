import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppUserRef message.
 */
export type AppUserRef = {
    /**
     * The ID of the application.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app user.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const AppUserRef$inboundSchema: z.ZodType<AppUserRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserRef$Outbound = {
    appId?: string | null | undefined;
    id?: string | null | undefined;
};
/** @internal */
export declare const AppUserRef$outboundSchema: z.ZodType<AppUserRef$Outbound, z.ZodTypeDef, AppUserRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserRef$ {
    /** @deprecated use `AppUserRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserRef$Outbound, z.ZodTypeDef, AppUserRef>;
    /** @deprecated use `AppUserRef$Outbound` instead. */
    type Outbound = AppUserRef$Outbound;
}
export declare function appUserRefToJSON(appUserRef: AppUserRef): string;
export declare function appUserRefFromJSON(jsonString: string): SafeParseResult<AppUserRef, SDKValidationError>;
