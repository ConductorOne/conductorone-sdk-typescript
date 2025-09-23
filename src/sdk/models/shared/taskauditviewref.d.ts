import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditViewRef message.
 */
export type TaskAuditViewRef = {
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditViewRef$inboundSchema: z.ZodType<TaskAuditViewRef, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditViewRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditViewRef$outboundSchema: z.ZodType<TaskAuditViewRef$Outbound, z.ZodTypeDef, TaskAuditViewRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditViewRef$ {
    /** @deprecated use `TaskAuditViewRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditViewRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditViewRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditViewRef$Outbound, z.ZodTypeDef, TaskAuditViewRef>;
    /** @deprecated use `TaskAuditViewRef$Outbound` instead. */
    type Outbound = TaskAuditViewRef$Outbound;
}
export declare function taskAuditViewRefToJSON(taskAuditViewRef: TaskAuditViewRef): string;
export declare function taskAuditViewRefFromJSON(jsonString: string): SafeParseResult<TaskAuditViewRef, SDKValidationError>;
