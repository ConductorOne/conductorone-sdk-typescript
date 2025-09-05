import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserStatus, AppUserStatus$Outbound } from "./appuserstatus.js";
import { AppUserStatusInput, AppUserStatusInput$Outbound } from "./appuserstatusinput.js";
/**
 * The appplication user type. Type can be user, system or service.
 */
export declare const AppUserType: {
    readonly AppUserTypeUnspecified: "APP_USER_TYPE_UNSPECIFIED";
    readonly AppUserTypeUser: "APP_USER_TYPE_USER";
    readonly AppUserTypeServiceAccount: "APP_USER_TYPE_SERVICE_ACCOUNT";
    readonly AppUserTypeSystemAccount: "APP_USER_TYPE_SYSTEM_ACCOUNT";
};
/**
 * The appplication user type. Type can be user, system or service.
 */
export type AppUserType = OpenEnum<typeof AppUserType>;
/**
 * Application User that represents an account in the application.
 */
export type AppUser = {
    /**
     * The ID of the application.
     */
    appId?: string | null | undefined;
    /**
     * The appplication user type. Type can be user, system or service.
     */
    appUserType?: AppUserType | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the application user.
     */
    displayName?: string | null | undefined;
    /**
     * The email field of the application user.
     */
    email?: string | null | undefined;
    /**
     * The emails field of the application user.
     */
    emails?: Array<string> | null | undefined;
    /**
     * The employee IDs field of the application user.
     */
    employeeIds?: Array<string> | null | undefined;
    /**
     * A unique idenditfier of the application user.
     */
    id?: string | null | undefined;
    /**
     * The conductor one user ID of the account owner.
     */
    identityUserId?: string | null | undefined;
    /**
     * The isExternal field.
     */
    isExternal?: boolean | null | undefined;
    profile?: {
        [k: string]: any;
    } | null | undefined;
    status?: AppUserStatus | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The username field of the application user.
     */
    username?: string | null | undefined;
    /**
     * The usernames field of the application user.
     */
    usernames?: Array<string> | null | undefined;
};
/**
 * Application User that represents an account in the application.
 */
export type AppUserInput = {
    /**
     * The appplication user type. Type can be user, system or service.
     */
    appUserType?: AppUserType | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    profile?: {
        [k: string]: any;
    } | null | undefined;
    status?: AppUserStatusInput | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppUserType$inboundSchema: z.ZodType<AppUserType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppUserType$outboundSchema: z.ZodType<AppUserType, z.ZodTypeDef, AppUserType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserType$ {
    /** @deprecated use `AppUserType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserType, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserType, z.ZodTypeDef, AppUserType>;
}
/** @internal */
export declare const AppUser$inboundSchema: z.ZodType<AppUser, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUser$Outbound = {
    appId?: string | null | undefined;
    appUserType?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    email?: string | null | undefined;
    emails?: Array<string> | null | undefined;
    employeeIds?: Array<string> | null | undefined;
    id?: string | null | undefined;
    identityUserId?: string | null | undefined;
    isExternal?: boolean | null | undefined;
    profile?: {
        [k: string]: any;
    } | null | undefined;
    status?: AppUserStatus$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
    username?: string | null | undefined;
    usernames?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppUser$outboundSchema: z.ZodType<AppUser$Outbound, z.ZodTypeDef, AppUser>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUser$ {
    /** @deprecated use `AppUser$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUser, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUser$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUser$Outbound, z.ZodTypeDef, AppUser>;
    /** @deprecated use `AppUser$Outbound` instead. */
    type Outbound = AppUser$Outbound;
}
export declare function appUserToJSON(appUser: AppUser): string;
export declare function appUserFromJSON(jsonString: string): SafeParseResult<AppUser, SDKValidationError>;
/** @internal */
export declare const AppUserInput$inboundSchema: z.ZodType<AppUserInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserInput$Outbound = {
    appUserType?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    profile?: {
        [k: string]: any;
    } | null | undefined;
    status?: AppUserStatusInput$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppUserInput$outboundSchema: z.ZodType<AppUserInput$Outbound, z.ZodTypeDef, AppUserInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserInput$ {
    /** @deprecated use `AppUserInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserInput$Outbound, z.ZodTypeDef, AppUserInput>;
    /** @deprecated use `AppUserInput$Outbound` instead. */
    type Outbound = AppUserInput$Outbound;
}
export declare function appUserInputToJSON(appUserInput: AppUserInput): string;
export declare function appUserInputFromJSON(jsonString: string): SafeParseResult<AppUserInput, SDKValidationError>;
