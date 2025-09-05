import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The TaskAuditMetaData message.
 */
export type TaskAuditMetaData = {
    user?: User | null | undefined;
};
/** @internal */
export declare const TaskAuditMetaData$inboundSchema: z.ZodType<TaskAuditMetaData, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditMetaData$Outbound = {
    user?: User$Outbound | null | undefined;
};
/** @internal */
export declare const TaskAuditMetaData$outboundSchema: z.ZodType<TaskAuditMetaData$Outbound, z.ZodTypeDef, TaskAuditMetaData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditMetaData$ {
    /** @deprecated use `TaskAuditMetaData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditMetaData, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditMetaData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditMetaData$Outbound, z.ZodTypeDef, TaskAuditMetaData>;
    /** @deprecated use `TaskAuditMetaData$Outbound` instead. */
    type Outbound = TaskAuditMetaData$Outbound;
}
export declare function taskAuditMetaDataToJSON(taskAuditMetaData: TaskAuditMetaData): string;
export declare function taskAuditMetaDataFromJSON(jsonString: string): SafeParseResult<TaskAuditMetaData, SDKValidationError>;
