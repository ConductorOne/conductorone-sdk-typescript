import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
import { TaskGrantSource, TaskGrantSource$Outbound } from "./taskgrantsource.js";
/**
 * Create a grant task.
 */
export type TaskServiceCreateGrantRequest = {
    /**
     * The ID of the app entitlement to grant access to.
     */
    appEntitlementId: string;
    /**
     * The ID of the app that is associated with the entitlement.
     */
    appId: string;
    /**
     * The ID of the app user to grant access for. This field and identityUserId cannot both be set for a given request.
     */
    appUserId?: string | null | undefined;
    /**
     * The description of the request.
     */
    description?: string | null | undefined;
    /**
     * Boolean stating whether or not the task is marked as emergency access.
     */
    emergencyAccess?: boolean | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    grantDuration?: string | null | undefined;
    /**
     * The ID of the user associated with the app user we are granting access for. This field cannot be set if appUserID is also set.
     */
    identityUserId?: string | null | undefined;
    requestData?: {
        [k: string]: any;
    } | null | undefined;
    source?: TaskGrantSource | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateGrantRequest$inboundSchema: z.ZodType<TaskServiceCreateGrantRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateGrantRequest$Outbound = {
    appEntitlementId: string;
    appId: string;
    appUserId?: string | null | undefined;
    description?: string | null | undefined;
    emergencyAccess?: boolean | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    grantDuration?: string | null | undefined;
    identityUserId?: string | null | undefined;
    requestData?: {
        [k: string]: any;
    } | null | undefined;
    source?: TaskGrantSource$Outbound | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateGrantRequest$outboundSchema: z.ZodType<TaskServiceCreateGrantRequest$Outbound, z.ZodTypeDef, TaskServiceCreateGrantRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateGrantRequest$ {
    /** @deprecated use `TaskServiceCreateGrantRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateGrantRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateGrantRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateGrantRequest$Outbound, z.ZodTypeDef, TaskServiceCreateGrantRequest>;
    /** @deprecated use `TaskServiceCreateGrantRequest$Outbound` instead. */
    type Outbound = TaskServiceCreateGrantRequest$Outbound;
}
export declare function taskServiceCreateGrantRequestToJSON(taskServiceCreateGrantRequest: TaskServiceCreateGrantRequest): string;
export declare function taskServiceCreateGrantRequestFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateGrantRequest, SDKValidationError>;
