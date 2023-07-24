/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserAttributeMappingSource } from "./userattributemappingsource";
import { Expose, Transform, Type } from "class-transformer";

/**
 *  The status of the user in the directory.
 *
 * @remarks
 *
 */
export enum UserDirectoryStatus {
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED",
}

/**
 *  The status of the user in the system.
 *
 * @remarks
 *
 */
export enum UserStatus {
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED",
}

/**
 *  The User object provides all of the details for an user, as well as some configuration.
 *
 * @remarks
 *
 */
export class User extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     *  The id of the user to whom tasks will be automatically reassigned to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delegatedUserId" })
    delegatedUserId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     *  The department which the user belongs to in the organization.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    /**
     *  A list of objects mapped based on department attribute mappings configured in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: UserAttributeMappingSource })
    @Expose({ name: "departmentSources" })
    @Type(() => UserAttributeMappingSource)
    departmentSources?: UserAttributeMappingSource[];

    /**
     *  A list of unique ids that represent different directories.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "directoryIds" })
    directoryIds?: string[];

    /**
     *  The status of the user in the directory.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "directoryStatus" })
    directoryStatus?: UserDirectoryStatus;

    /**
     *  A list of objects mapped based on directoryStatus attribute mappings configured in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: UserAttributeMappingSource })
    @Expose({ name: "directoryStatusSources" })
    @Type(() => UserAttributeMappingSource)
    directoryStatusSources?: UserAttributeMappingSource[];

    /**
     *  The display name of the user.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     *  This is the user's email.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     *  The users employment status.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employmentStatus" })
    employmentStatus?: string;

    /**
     *  A list of objects mapped based on employmentStatus attribute mappings configured in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: UserAttributeMappingSource })
    @Expose({ name: "employmentStatusSources" })
    @Type(() => UserAttributeMappingSource)
    employmentStatusSources?: UserAttributeMappingSource[];

    /**
     *  The employment type of the user.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employmentType" })
    employmentType?: string;

    /**
     *  A list of objects mapped based on employmentType attribute mappings configured in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: UserAttributeMappingSource })
    @Expose({ name: "employmentTypeSources" })
    @Type(() => UserAttributeMappingSource)
    employmentTypeSources?: UserAttributeMappingSource[];

    /**
     *  A unique identifier of the user.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     *  The job title of the user.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "jobTitle" })
    jobTitle?: string;

    /**
     *  A list of objects mapped based on jobTitle attribute mappings configured in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: UserAttributeMappingSource })
    @Expose({ name: "jobTitleSources" })
    @Type(() => UserAttributeMappingSource)
    jobTitleSources?: UserAttributeMappingSource[];

    /**
     *  A list of ids of the user's managers.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "managerIds" })
    managerIds?: string[];

    /**
     *  A list of objects mapped based on managerId attribute mappings configured in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: UserAttributeMappingSource })
    @Expose({ name: "managerSources" })
    @Type(() => UserAttributeMappingSource)
    managerSources?: UserAttributeMappingSource[];

    /**
     *  A list of unique identifiers that maps to ConductorOne’s user roles let you assign users permissions tailored to the work they do in the software.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roleIds" })
    roleIds?: string[];

    /**
     *  The status of the user in the system.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: UserStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
