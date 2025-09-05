import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * Create a revoke task.
 */
export type TaskServiceCreateRevokeRequest = {
    /**
     * The ID of the app entitlement to revoke access to.
     */
    appEntitlementId: string;
    /**
     * The ID of the app associated with the entitlement.
     */
    appId: string;
    /**
     * The ID of the app user to revoke access from. This field and identityUserId cannot both be set for a given request.
     */
    appUserId?: string | null | undefined;
    /**
     * The description of the request.
     */
    description?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The ID of the user associated with the app user we are revoking access from. This field cannot be set if appUserID is also set.
     */
    identityUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateRevokeRequest$inboundSchema: z.ZodType<TaskServiceCreateRevokeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateRevokeRequest$Outbound = {
    appEntitlementId: string;
    appId: string;
    appUserId?: string | null | undefined;
    description?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    identityUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateRevokeRequest$outboundSchema: z.ZodType<TaskServiceCreateRevokeRequest$Outbound, z.ZodTypeDef, TaskServiceCreateRevokeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateRevokeRequest$ {
    /** @deprecated use `TaskServiceCreateRevokeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateRevokeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateRevokeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateRevokeRequest$Outbound, z.ZodTypeDef, TaskServiceCreateRevokeRequest>;
    /** @deprecated use `TaskServiceCreateRevokeRequest$Outbound` instead. */
    type Outbound = TaskServiceCreateRevokeRequest$Outbound;
}
export declare function taskServiceCreateRevokeRequestToJSON(taskServiceCreateRevokeRequest: TaskServiceCreateRevokeRequest): string;
export declare function taskServiceCreateRevokeRequestFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateRevokeRequest, SDKValidationError>;
