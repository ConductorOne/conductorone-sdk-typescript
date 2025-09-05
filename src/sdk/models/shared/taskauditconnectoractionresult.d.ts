import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskAuditCancelledResult, TaskAuditCancelledResult$Outbound } from "./taskauditcancelledresult.js";
import { TaskAuditErrorResult, TaskAuditErrorResult$Outbound } from "./taskauditerrorresult.js";
import { TaskAuditSuccessResult, TaskAuditSuccessResult$Outbound } from "./taskauditsuccessresult.js";
/**
 * The TaskAuditConnectorActionResult message.
 *
 * @remarks
 *
 * This message contains a oneof named result. Only a single field of the following list may be set at a time:
 *   - success
 *   - error
 *   - cancelled
 */
export type TaskAuditConnectorActionResult = {
    /**
     * The appEntitlementId field.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    cancelled?: TaskAuditCancelledResult | null | undefined;
    /**
     * The connectorActionId field.
     */
    connectorActionId?: string | null | undefined;
    /**
     * The connectorId field.
     */
    connectorId?: string | null | undefined;
    error?: TaskAuditErrorResult | null | undefined;
    success?: TaskAuditSuccessResult | null | undefined;
};
/** @internal */
export declare const TaskAuditConnectorActionResult$inboundSchema: z.ZodType<TaskAuditConnectorActionResult, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditConnectorActionResult$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    cancelled?: TaskAuditCancelledResult$Outbound | null | undefined;
    connectorActionId?: string | null | undefined;
    connectorId?: string | null | undefined;
    error?: TaskAuditErrorResult$Outbound | null | undefined;
    success?: TaskAuditSuccessResult$Outbound | null | undefined;
};
/** @internal */
export declare const TaskAuditConnectorActionResult$outboundSchema: z.ZodType<TaskAuditConnectorActionResult$Outbound, z.ZodTypeDef, TaskAuditConnectorActionResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditConnectorActionResult$ {
    /** @deprecated use `TaskAuditConnectorActionResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditConnectorActionResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditConnectorActionResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditConnectorActionResult$Outbound, z.ZodTypeDef, TaskAuditConnectorActionResult>;
    /** @deprecated use `TaskAuditConnectorActionResult$Outbound` instead. */
    type Outbound = TaskAuditConnectorActionResult$Outbound;
}
export declare function taskAuditConnectorActionResultToJSON(taskAuditConnectorActionResult: TaskAuditConnectorActionResult): string;
export declare function taskAuditConnectorActionResultFromJSON(jsonString: string): SafeParseResult<TaskAuditConnectorActionResult, SDKValidationError>;
