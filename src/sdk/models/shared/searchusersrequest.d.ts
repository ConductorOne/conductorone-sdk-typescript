import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserExpandMask, UserExpandMask$Outbound } from "./userexpandmask.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
export declare const ExcludeTypes: {
    readonly UserTypeUnspecified: "USER_TYPE_UNSPECIFIED";
    readonly UserTypeSystem: "USER_TYPE_SYSTEM";
    readonly UserTypeHuman: "USER_TYPE_HUMAN";
    readonly UserTypeService: "USER_TYPE_SERVICE";
    readonly UserTypeAgent: "USER_TYPE_AGENT";
};
export type ExcludeTypes = OpenEnum<typeof ExcludeTypes>;
export declare const UserStatuses: {
    readonly Unknown: "UNKNOWN";
    readonly Enabled: "ENABLED";
    readonly Disabled: "DISABLED";
    readonly Deleted: "DELETED";
};
export type UserStatuses = OpenEnum<typeof UserStatuses>;
/**
 * Search for users based on some filters.
 */
export type SearchUsersRequest = {
    /**
     * Search for users based on their email (exact match).
     */
    email?: string | null | undefined;
    /**
     * An array of users IDs to exclude from the results.
     */
    excludeIds?: Array<string> | null | undefined;
    /**
     * An array of types to exclude from the results.
     */
    excludeTypes?: Array<ExcludeTypes> | null | undefined;
    expandMask?: UserExpandMask | null | undefined;
    /**
     * Deprecated. Use refs array instead.
     */
    ids?: Array<string> | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Query the apps with a fuzzy search on display name and emails.
     */
    query?: string | null | undefined;
    /**
     * An array of user refs to restrict the return values to by ID.
     */
    refs?: Array<UserRef> | null | undefined;
    /**
     * Search for users that have any of the role IDs on this list.
     */
    roleIds?: Array<string> | null | undefined;
    /**
     * Search for users that have any of the statuses on this list. This can only be ENABLED, DISABLED, and DELETED
     */
    userStatuses?: Array<UserStatuses> | null | undefined;
};
/** @internal */
export declare const ExcludeTypes$inboundSchema: z.ZodType<ExcludeTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExcludeTypes$outboundSchema: z.ZodType<ExcludeTypes, z.ZodTypeDef, ExcludeTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExcludeTypes$ {
    /** @deprecated use `ExcludeTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExcludeTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExcludeTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExcludeTypes, z.ZodTypeDef, ExcludeTypes>;
}
/** @internal */
export declare const UserStatuses$inboundSchema: z.ZodType<UserStatuses, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UserStatuses$outboundSchema: z.ZodType<UserStatuses, z.ZodTypeDef, UserStatuses>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserStatuses$ {
    /** @deprecated use `UserStatuses$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserStatuses, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserStatuses$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserStatuses, z.ZodTypeDef, UserStatuses>;
}
/** @internal */
export declare const SearchUsersRequest$inboundSchema: z.ZodType<SearchUsersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchUsersRequest$Outbound = {
    email?: string | null | undefined;
    excludeIds?: Array<string> | null | undefined;
    excludeTypes?: Array<string> | null | undefined;
    expandMask?: UserExpandMask$Outbound | null | undefined;
    ids?: Array<string> | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<UserRef$Outbound> | null | undefined;
    roleIds?: Array<string> | null | undefined;
    userStatuses?: Array<string> | null | undefined;
};
/** @internal */
export declare const SearchUsersRequest$outboundSchema: z.ZodType<SearchUsersRequest$Outbound, z.ZodTypeDef, SearchUsersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchUsersRequest$ {
    /** @deprecated use `SearchUsersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchUsersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchUsersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchUsersRequest$Outbound, z.ZodTypeDef, SearchUsersRequest>;
    /** @deprecated use `SearchUsersRequest$Outbound` instead. */
    type Outbound = SearchUsersRequest$Outbound;
}
export declare function searchUsersRequestToJSON(searchUsersRequest: SearchUsersRequest): string;
export declare function searchUsersRequestFromJSON(jsonString: string): SafeParseResult<SearchUsersRequest, SDKValidationError>;
