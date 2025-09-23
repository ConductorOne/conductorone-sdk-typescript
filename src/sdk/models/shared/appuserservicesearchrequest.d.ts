import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserExpandMask, AppUserExpandMask$Outbound } from "./appuserexpandmask.js";
import { AppUserRef, AppUserRef$Outbound } from "./appuserref.js";
export declare const AppUserDomains: {
    readonly AppUserDomainUnspecified: "APP_USER_DOMAIN_UNSPECIFIED";
    readonly AppUserDomainExternal: "APP_USER_DOMAIN_EXTERNAL";
    readonly AppUserDomainTrusted: "APP_USER_DOMAIN_TRUSTED";
};
export type AppUserDomains = OpenEnum<typeof AppUserDomains>;
export declare const AppUserStatuses: {
    readonly StatusUnspecified: "STATUS_UNSPECIFIED";
    readonly StatusEnabled: "STATUS_ENABLED";
    readonly StatusDisabled: "STATUS_DISABLED";
    readonly StatusDeleted: "STATUS_DELETED";
};
export type AppUserStatuses = OpenEnum<typeof AppUserStatuses>;
export declare const AppUserTypes: {
    readonly AppUserTypeUnspecified: "APP_USER_TYPE_UNSPECIFIED";
    readonly AppUserTypeUser: "APP_USER_TYPE_USER";
    readonly AppUserTypeServiceAccount: "APP_USER_TYPE_SERVICE_ACCOUNT";
    readonly AppUserTypeSystemAccount: "APP_USER_TYPE_SYSTEM_ACCOUNT";
};
export type AppUserTypes = OpenEnum<typeof AppUserTypes>;
/**
 * Search App users based on filters specified in the request body
 */
export type AppUserServiceSearchRequest = {
    /**
     * The app ID to restrict the search to.
     */
    appId?: string | null | undefined;
    /**
     * A list of account domains to restrict the search to.
     */
    appUserDomains?: Array<AppUserDomains> | null | undefined;
    /**
     * A list of app user IDs to restrict the search to.
     */
    appUserIds?: Array<string> | null | undefined;
    /**
     * A list of app user status details to restrict the search to.
     */
    appUserStatusDetails?: Array<string> | null | undefined;
    /**
     * A list of app user statuses to restrict the search to.
     */
    appUserStatuses?: Array<AppUserStatuses> | null | undefined;
    /**
     * A list of app user types to restrict the search to.
     */
    appUserTypes?: Array<AppUserTypes> | null | undefined;
    /**
     * A list of app user IDs to remove from the results.
     */
    excludeAppUserIds?: Array<string> | null | undefined;
    expandMask?: AppUserExpandMask | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Query the apps with a fuzzy search on display name and description.
     */
    query?: string | null | undefined;
    /**
     * A list of app users to limit the search to.
     */
    refs?: Array<AppUserRef> | null | undefined;
    /**
     * A list of user IDs to restrict the search by.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppUserDomains$inboundSchema: z.ZodType<AppUserDomains, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppUserDomains$outboundSchema: z.ZodType<AppUserDomains, z.ZodTypeDef, AppUserDomains>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserDomains$ {
    /** @deprecated use `AppUserDomains$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserDomains, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserDomains$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserDomains, z.ZodTypeDef, AppUserDomains>;
}
/** @internal */
export declare const AppUserStatuses$inboundSchema: z.ZodType<AppUserStatuses, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppUserStatuses$outboundSchema: z.ZodType<AppUserStatuses, z.ZodTypeDef, AppUserStatuses>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserStatuses$ {
    /** @deprecated use `AppUserStatuses$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserStatuses, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserStatuses$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserStatuses, z.ZodTypeDef, AppUserStatuses>;
}
/** @internal */
export declare const AppUserTypes$inboundSchema: z.ZodType<AppUserTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppUserTypes$outboundSchema: z.ZodType<AppUserTypes, z.ZodTypeDef, AppUserTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserTypes$ {
    /** @deprecated use `AppUserTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserTypes, z.ZodTypeDef, AppUserTypes>;
}
/** @internal */
export declare const AppUserServiceSearchRequest$inboundSchema: z.ZodType<AppUserServiceSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceSearchRequest$Outbound = {
    appId?: string | null | undefined;
    appUserDomains?: Array<string> | null | undefined;
    appUserIds?: Array<string> | null | undefined;
    appUserStatusDetails?: Array<string> | null | undefined;
    appUserStatuses?: Array<string> | null | undefined;
    appUserTypes?: Array<string> | null | undefined;
    excludeAppUserIds?: Array<string> | null | undefined;
    expandMask?: AppUserExpandMask$Outbound | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<AppUserRef$Outbound> | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppUserServiceSearchRequest$outboundSchema: z.ZodType<AppUserServiceSearchRequest$Outbound, z.ZodTypeDef, AppUserServiceSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceSearchRequest$ {
    /** @deprecated use `AppUserServiceSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceSearchRequest$Outbound, z.ZodTypeDef, AppUserServiceSearchRequest>;
    /** @deprecated use `AppUserServiceSearchRequest$Outbound` instead. */
    type Outbound = AppUserServiceSearchRequest$Outbound;
}
export declare function appUserServiceSearchRequestToJSON(appUserServiceSearchRequest: AppUserServiceSearchRequest): string;
export declare function appUserServiceSearchRequestFromJSON(jsonString: string): SafeParseResult<AppUserServiceSearchRequest, SDKValidationError>;
