import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserAttributeMappingSource, UserAttributeMappingSource$Outbound } from "./userattributemappingsource.js";
/**
 * The status of the user in the directory.
 */
export declare const DirectoryStatus: {
    readonly Unknown: "UNKNOWN";
    readonly Enabled: "ENABLED";
    readonly Disabled: "DISABLED";
    readonly Deleted: "DELETED";
};
/**
 * The status of the user in the directory.
 */
export type DirectoryStatus = OpenEnum<typeof DirectoryStatus>;
/**
 * The status of the user in the system.
 */
export declare const UserStatus: {
    readonly Unknown: "UNKNOWN";
    readonly Enabled: "ENABLED";
    readonly Disabled: "DISABLED";
    readonly Deleted: "DELETED";
};
/**
 * The status of the user in the system.
 */
export type UserStatus = OpenEnum<typeof UserStatus>;
/**
 * The type of the user.
 */
export declare const Type: {
    readonly UserTypeUnspecified: "USER_TYPE_UNSPECIFIED";
    readonly UserTypeSystem: "USER_TYPE_SYSTEM";
    readonly UserTypeHuman: "USER_TYPE_HUMAN";
    readonly UserTypeService: "USER_TYPE_SERVICE";
    readonly UserTypeAgent: "USER_TYPE_AGENT";
};
/**
 * The type of the user.
 */
export type Type = OpenEnum<typeof Type>;
/**
 * The User object provides all of the details for an user, as well as some configuration.
 */
export type User = {
    createdAt?: Date | null | undefined;
    /**
     * The id of the user to whom tasks will be automatically reassigned to.
     */
    delegatedUserId?: string | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The department which the user belongs to in the organization.
     */
    department?: string | null | undefined;
    /**
     * A list of objects mapped based on department attribute mappings configured in the system.
     */
    departmentSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * A list of unique ids that represent different directories.
     */
    directoryIds?: Array<string> | null | undefined;
    /**
     * The status of the user in the directory.
     */
    directoryStatus?: DirectoryStatus | null | undefined;
    /**
     * A list of objects mapped based on directoryStatus attribute mappings configured in the system.
     */
    directoryStatusSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * The display name of the user.
     */
    displayName?: string | null | undefined;
    /**
     * This is the user's email.
     */
    email?: string | null | undefined;
    /**
     * A list of source data for the email attribute.
     */
    emailSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * This is a list of all of the user's emails from app users.
     */
    emails?: Array<string> | null | undefined;
    /**
     * A list of source data for the employee IDs attribute.
     */
    employeeIdSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * This is a list of all of the user's employee IDs from app users.
     */
    employeeIds?: Array<string> | null | undefined;
    /**
     * The users employment status.
     */
    employmentStatus?: string | null | undefined;
    /**
     * A list of objects mapped based on employmentStatus attribute mappings configured in the system.
     */
    employmentStatusSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * The employment type of the user.
     */
    employmentType?: string | null | undefined;
    /**
     * A list of objects mapped based on employmentType attribute mappings configured in the system.
     */
    employmentTypeSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * A unique identifier of the user.
     */
    id?: string | null | undefined;
    /**
     * The job title of the user.
     */
    jobTitle?: string | null | undefined;
    /**
     * A list of objects mapped based on jobTitle attribute mappings configured in the system.
     */
    jobTitleSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * A list of ids of the user's managers.
     */
    managerIds?: Array<string> | null | undefined;
    /**
     * A list of objects mapped based on managerId attribute mappings configured in the system.
     */
    managerSources?: Array<UserAttributeMappingSource> | null | undefined;
    profile?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * A list of unique identifiers that maps to ConductorOne's user roles let you assign users permissions tailored to the work they do in the software.
     */
    roleIds?: Array<string> | null | undefined;
    /**
     * The status of the user in the system.
     */
    status?: UserStatus | null | undefined;
    /**
     * The type of the user.
     */
    type?: Type | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * This is the user's primary username. Typically sourced from the primary directory.
     */
    username?: string | null | undefined;
    /**
     * A list of source data for the usernames attribute.
     */
    usernameSources?: Array<UserAttributeMappingSource> | null | undefined;
    /**
     * This is a list of all of the user's usernames from app users.
     */
    usernames?: Array<string> | null | undefined;
};
/** @internal */
export declare const DirectoryStatus$inboundSchema: z.ZodType<DirectoryStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DirectoryStatus$outboundSchema: z.ZodType<DirectoryStatus, z.ZodTypeDef, DirectoryStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryStatus$ {
    /** @deprecated use `DirectoryStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryStatus, z.ZodTypeDef, DirectoryStatus>;
}
/** @internal */
export declare const UserStatus$inboundSchema: z.ZodType<UserStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UserStatus$outboundSchema: z.ZodType<UserStatus, z.ZodTypeDef, UserStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserStatus$ {
    /** @deprecated use `UserStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserStatus, z.ZodTypeDef, UserStatus>;
}
/** @internal */
export declare const Type$inboundSchema: z.ZodType<Type, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Type$outboundSchema: z.ZodType<Type, z.ZodTypeDef, Type>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Type, z.ZodTypeDef, unknown>;
    /** @deprecated use `Type$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Type, z.ZodTypeDef, Type>;
}
/** @internal */
export declare const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
/** @internal */
export type User$Outbound = {
    createdAt?: string | null | undefined;
    delegatedUserId?: string | null | undefined;
    deletedAt?: string | null | undefined;
    department?: string | null | undefined;
    departmentSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    directoryIds?: Array<string> | null | undefined;
    directoryStatus?: string | null | undefined;
    directoryStatusSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    displayName?: string | null | undefined;
    email?: string | null | undefined;
    emailSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    emails?: Array<string> | null | undefined;
    employeeIdSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    employeeIds?: Array<string> | null | undefined;
    employmentStatus?: string | null | undefined;
    employmentStatusSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    employmentType?: string | null | undefined;
    employmentTypeSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    id?: string | null | undefined;
    jobTitle?: string | null | undefined;
    jobTitleSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    managerIds?: Array<string> | null | undefined;
    managerSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    profile?: {
        [k: string]: any;
    } | null | undefined;
    roleIds?: Array<string> | null | undefined;
    status?: string | null | undefined;
    type?: string | null | undefined;
    updatedAt?: string | null | undefined;
    username?: string | null | undefined;
    usernameSources?: Array<UserAttributeMappingSource$Outbound> | null | undefined;
    usernames?: Array<string> | null | undefined;
};
/** @internal */
export declare const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace User$ {
    /** @deprecated use `User$inboundSchema` instead. */
    const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
    /** @deprecated use `User$outboundSchema` instead. */
    const outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
    /** @deprecated use `User$Outbound` instead. */
    type Outbound = User$Outbound;
}
export declare function userToJSON(user: User): string;
export declare function userFromJSON(jsonString: string): SafeParseResult<User, SDKValidationError>;
