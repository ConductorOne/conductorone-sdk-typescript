import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppUserCreatedTrigger message.
 *
 * @remarks
 *
 * This message contains a oneof named app_identifier. Only a single field of the following list may be set at a time:
 *   - appId
 *   - appIdCel
 */
export type AppUserCreatedTrigger = {
    /**
     * The appId field.
     *
     * @remarks
     * This field is part of the `app_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.AppUserCreatedTrigger` for more details.
     */
    appId?: string | null | undefined;
    /**
     * The appIdCel field.
     *
     * @remarks
     * This field is part of the `app_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.AppUserCreatedTrigger` for more details.
     */
    appIdCel?: string | null | undefined;
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
};
/** @internal */
export declare const AppUserCreatedTrigger$inboundSchema: z.ZodType<AppUserCreatedTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserCreatedTrigger$Outbound = {
    appId?: string | null | undefined;
    appIdCel?: string | null | undefined;
    condition?: string | null | undefined;
};
/** @internal */
export declare const AppUserCreatedTrigger$outboundSchema: z.ZodType<AppUserCreatedTrigger$Outbound, z.ZodTypeDef, AppUserCreatedTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserCreatedTrigger$ {
    /** @deprecated use `AppUserCreatedTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserCreatedTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserCreatedTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserCreatedTrigger$Outbound, z.ZodTypeDef, AppUserCreatedTrigger>;
    /** @deprecated use `AppUserCreatedTrigger$Outbound` instead. */
    type Outbound = AppUserCreatedTrigger$Outbound;
}
export declare function appUserCreatedTriggerToJSON(appUserCreatedTrigger: AppUserCreatedTrigger): string;
export declare function appUserCreatedTriggerFromJSON(jsonString: string): SafeParseResult<AppUserCreatedTrigger, SDKValidationError>;
