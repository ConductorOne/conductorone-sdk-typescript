import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskRevokeSourceExpired, TaskRevokeSourceExpired$Outbound } from "./taskrevokesourceexpired.js";
import { TaskRevokeSourceNonUsage, TaskRevokeSourceNonUsage$Outbound } from "./taskrevokesourcenonusage.js";
import { TaskRevokeSourceRequest, TaskRevokeSourceRequest$Outbound } from "./taskrevokesourcerequest.js";
import { TaskRevokeSourceReview, TaskRevokeSourceReview$Outbound } from "./taskrevokesourcereview.js";
/**
 * The TaskRevokeSource message indicates the source of the revoke task is one of expired, nonUsage, request, or review.
 *
 * @remarks
 *
 * This message contains a oneof named origin. Only a single field of the following list may be set at a time:
 *   - review
 *   - request
 *   - expired
 *   - nonUsage
 */
export type TaskRevokeSource = {
    expired?: TaskRevokeSourceExpired | null | undefined;
    nonUsage?: TaskRevokeSourceNonUsage | null | undefined;
    request?: TaskRevokeSourceRequest | null | undefined;
    review?: TaskRevokeSourceReview | null | undefined;
};
/** @internal */
export declare const TaskRevokeSource$inboundSchema: z.ZodType<TaskRevokeSource, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskRevokeSource$Outbound = {
    expired?: TaskRevokeSourceExpired$Outbound | null | undefined;
    nonUsage?: TaskRevokeSourceNonUsage$Outbound | null | undefined;
    request?: TaskRevokeSourceRequest$Outbound | null | undefined;
    review?: TaskRevokeSourceReview$Outbound | null | undefined;
};
/** @internal */
export declare const TaskRevokeSource$outboundSchema: z.ZodType<TaskRevokeSource$Outbound, z.ZodTypeDef, TaskRevokeSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskRevokeSource$ {
    /** @deprecated use `TaskRevokeSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskRevokeSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskRevokeSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskRevokeSource$Outbound, z.ZodTypeDef, TaskRevokeSource>;
    /** @deprecated use `TaskRevokeSource$Outbound` instead. */
    type Outbound = TaskRevokeSource$Outbound;
}
export declare function taskRevokeSourceToJSON(taskRevokeSource: TaskRevokeSource): string;
export declare function taskRevokeSourceFromJSON(jsonString: string): SafeParseResult<TaskRevokeSource, SDKValidationError>;
