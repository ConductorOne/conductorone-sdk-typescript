import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditFormInstanceChange message.
 */
export type TaskAuditFormInstanceChange = {
    /**
     * The isValid field.
     */
    isValid?: boolean | null | undefined;
};
/** @internal */
export declare const TaskAuditFormInstanceChange$inboundSchema: z.ZodType<TaskAuditFormInstanceChange, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditFormInstanceChange$Outbound = {
    isValid?: boolean | null | undefined;
};
/** @internal */
export declare const TaskAuditFormInstanceChange$outboundSchema: z.ZodType<TaskAuditFormInstanceChange$Outbound, z.ZodTypeDef, TaskAuditFormInstanceChange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditFormInstanceChange$ {
    /** @deprecated use `TaskAuditFormInstanceChange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditFormInstanceChange, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditFormInstanceChange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditFormInstanceChange$Outbound, z.ZodTypeDef, TaskAuditFormInstanceChange>;
    /** @deprecated use `TaskAuditFormInstanceChange$Outbound` instead. */
    type Outbound = TaskAuditFormInstanceChange$Outbound;
}
export declare function taskAuditFormInstanceChangeToJSON(taskAuditFormInstanceChange: TaskAuditFormInstanceChange): string;
export declare function taskAuditFormInstanceChangeFromJSON(jsonString: string): SafeParseResult<TaskAuditFormInstanceChange, SDKValidationError>;
