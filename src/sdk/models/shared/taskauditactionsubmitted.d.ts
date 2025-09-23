import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskAction1, TaskAction1$Outbound } from "./taskaction1.js";
/**
 * The TaskAuditActionSubmitted message.
 */
export type TaskAuditActionSubmitted = {
    action?: TaskAction1 | null | undefined;
};
/** @internal */
export declare const TaskAuditActionSubmitted$inboundSchema: z.ZodType<TaskAuditActionSubmitted, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditActionSubmitted$Outbound = {
    action?: TaskAction1$Outbound | null | undefined;
};
/** @internal */
export declare const TaskAuditActionSubmitted$outboundSchema: z.ZodType<TaskAuditActionSubmitted$Outbound, z.ZodTypeDef, TaskAuditActionSubmitted>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditActionSubmitted$ {
    /** @deprecated use `TaskAuditActionSubmitted$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditActionSubmitted, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditActionSubmitted$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditActionSubmitted$Outbound, z.ZodTypeDef, TaskAuditActionSubmitted>;
    /** @deprecated use `TaskAuditActionSubmitted$Outbound` instead. */
    type Outbound = TaskAuditActionSubmitted$Outbound;
}
export declare function taskAuditActionSubmittedToJSON(taskAuditActionSubmitted: TaskAuditActionSubmitted): string;
export declare function taskAuditActionSubmittedFromJSON(jsonString: string): SafeParseResult<TaskAuditActionSubmitted, SDKValidationError>;
