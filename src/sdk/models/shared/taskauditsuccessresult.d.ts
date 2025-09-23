import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskAuditSuccessResultAnnotations = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskAuditSuccessResult message.
 */
export type TaskAuditSuccessResult = {
    /**
     * The annotations field.
     */
    annotations?: Array<TaskAuditSuccessResultAnnotations> | null | undefined;
};
/** @internal */
export declare const TaskAuditSuccessResultAnnotations$inboundSchema: z.ZodType<TaskAuditSuccessResultAnnotations, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditSuccessResultAnnotations$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskAuditSuccessResultAnnotations$outboundSchema: z.ZodType<TaskAuditSuccessResultAnnotations$Outbound, z.ZodTypeDef, TaskAuditSuccessResultAnnotations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditSuccessResultAnnotations$ {
    /** @deprecated use `TaskAuditSuccessResultAnnotations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditSuccessResultAnnotations, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditSuccessResultAnnotations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditSuccessResultAnnotations$Outbound, z.ZodTypeDef, TaskAuditSuccessResultAnnotations>;
    /** @deprecated use `TaskAuditSuccessResultAnnotations$Outbound` instead. */
    type Outbound = TaskAuditSuccessResultAnnotations$Outbound;
}
export declare function taskAuditSuccessResultAnnotationsToJSON(taskAuditSuccessResultAnnotations: TaskAuditSuccessResultAnnotations): string;
export declare function taskAuditSuccessResultAnnotationsFromJSON(jsonString: string): SafeParseResult<TaskAuditSuccessResultAnnotations, SDKValidationError>;
/** @internal */
export declare const TaskAuditSuccessResult$inboundSchema: z.ZodType<TaskAuditSuccessResult, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditSuccessResult$Outbound = {
    annotations?: Array<TaskAuditSuccessResultAnnotations$Outbound> | null | undefined;
};
/** @internal */
export declare const TaskAuditSuccessResult$outboundSchema: z.ZodType<TaskAuditSuccessResult$Outbound, z.ZodTypeDef, TaskAuditSuccessResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditSuccessResult$ {
    /** @deprecated use `TaskAuditSuccessResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditSuccessResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditSuccessResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditSuccessResult$Outbound, z.ZodTypeDef, TaskAuditSuccessResult>;
    /** @deprecated use `TaskAuditSuccessResult$Outbound` instead. */
    type Outbound = TaskAuditSuccessResult$Outbound;
}
export declare function taskAuditSuccessResultToJSON(taskAuditSuccessResult: TaskAuditSuccessResult): string;
export declare function taskAuditSuccessResultFromJSON(jsonString: string): SafeParseResult<TaskAuditSuccessResult, SDKValidationError>;
