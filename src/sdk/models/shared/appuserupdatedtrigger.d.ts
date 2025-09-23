import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppUserUpdatedTrigger message.
 *
 * @remarks
 *
 * This message contains a oneof named app_identifier. Only a single field of the following list may be set at a time:
 *   - appId
 *   - appIdCel
 */
export type AppUserUpdatedTrigger = {
    /**
     * The appId field.
     *
     * @remarks
     * This field is part of the `app_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.AppUserUpdatedTrigger` for more details.
     */
    appId?: string | null | undefined;
    /**
     * The appIdCel field.
     *
     * @remarks
     * This field is part of the `app_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.AppUserUpdatedTrigger` for more details.
     */
    appIdCel?: string | null | undefined;
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
};
/** @internal */
export declare const AppUserUpdatedTrigger$inboundSchema: z.ZodType<AppUserUpdatedTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserUpdatedTrigger$Outbound = {
    appId?: string | null | undefined;
    appIdCel?: string | null | undefined;
    condition?: string | null | undefined;
};
/** @internal */
export declare const AppUserUpdatedTrigger$outboundSchema: z.ZodType<AppUserUpdatedTrigger$Outbound, z.ZodTypeDef, AppUserUpdatedTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserUpdatedTrigger$ {
    /** @deprecated use `AppUserUpdatedTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserUpdatedTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserUpdatedTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserUpdatedTrigger$Outbound, z.ZodTypeDef, AppUserUpdatedTrigger>;
    /** @deprecated use `AppUserUpdatedTrigger$Outbound` instead. */
    type Outbound = AppUserUpdatedTrigger$Outbound;
}
export declare function appUserUpdatedTriggerToJSON(appUserUpdatedTrigger: AppUserUpdatedTrigger): string;
export declare function appUserUpdatedTriggerFromJSON(jsonString: string): SafeParseResult<AppUserUpdatedTrigger, SDKValidationError>;
