import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserInput, AppUserInput$Outbound } from "./appuser.js";
import { AppUserExpandMask, AppUserExpandMask$Outbound } from "./appuserexpandmask.js";
/**
 * The AppUserServiceUpdateRequest message contains the app user and the fields to be updated.
 */
export type AppUserServiceUpdateRequest = {
    appUser?: AppUserInput | null | undefined;
    expandMask?: AppUserExpandMask | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceUpdateRequest$inboundSchema: z.ZodType<AppUserServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceUpdateRequest$Outbound = {
    appUser?: AppUserInput$Outbound | null | undefined;
    expandMask?: AppUserExpandMask$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceUpdateRequest$outboundSchema: z.ZodType<AppUserServiceUpdateRequest$Outbound, z.ZodTypeDef, AppUserServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceUpdateRequest$ {
    /** @deprecated use `AppUserServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceUpdateRequest$Outbound, z.ZodTypeDef, AppUserServiceUpdateRequest>;
    /** @deprecated use `AppUserServiceUpdateRequest$Outbound` instead. */
    type Outbound = AppUserServiceUpdateRequest$Outbound;
}
export declare function appUserServiceUpdateRequestToJSON(appUserServiceUpdateRequest: AppUserServiceUpdateRequest): string;
export declare function appUserServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<AppUserServiceUpdateRequest, SDKValidationError>;
