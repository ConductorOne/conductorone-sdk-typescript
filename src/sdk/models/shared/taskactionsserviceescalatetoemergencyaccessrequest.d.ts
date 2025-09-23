import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceEscalateToEmergencyAccessRequest message.
 */
export type TaskActionsServiceEscalateToEmergencyAccessRequest = {
    /**
     * The comment field.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The policyStepId field.
     */
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceEscalateToEmergencyAccessRequest$inboundSchema: z.ZodType<TaskActionsServiceEscalateToEmergencyAccessRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceEscalateToEmergencyAccessRequest$outboundSchema: z.ZodType<TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound, z.ZodTypeDef, TaskActionsServiceEscalateToEmergencyAccessRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceEscalateToEmergencyAccessRequest$ {
    /** @deprecated use `TaskActionsServiceEscalateToEmergencyAccessRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceEscalateToEmergencyAccessRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceEscalateToEmergencyAccessRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound, z.ZodTypeDef, TaskActionsServiceEscalateToEmergencyAccessRequest>;
    /** @deprecated use `TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound;
}
export declare function taskActionsServiceEscalateToEmergencyAccessRequestToJSON(taskActionsServiceEscalateToEmergencyAccessRequest: TaskActionsServiceEscalateToEmergencyAccessRequest): string;
export declare function taskActionsServiceEscalateToEmergencyAccessRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceEscalateToEmergencyAccessRequest, SDKValidationError>;
