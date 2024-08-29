/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TaskView, TaskView$ } from "./taskview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskServiceActionResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The TaskServiceActionResponse message.
 */
export type TaskServiceActionResponse = {
    /**
     * Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.
     */
    taskView?: TaskView | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<TaskServiceActionResponseExpanded> | null | undefined;
    /**
     * The ticketActionId field.
     */
    ticketActionId?: string | undefined;
};

/** @internal */
export namespace TaskServiceActionResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        TaskServiceActionResponseExpanded,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            "@type": z.string().optional(),
        })
        .catchall(z.any())
        .transform((v) => {
            const { "@type": atType, ...additionalProperties } = v;

            return {
                ...(v["@type"] === undefined ? null : { atType: v["@type"] }),
                additionalProperties,
            };
        });

    export type Outbound = {
        "@type"?: string | undefined;
        [additionalProperties: string]: unknown;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TaskServiceActionResponseExpanded
    > = z
        .object({
            atType: z.string().optional(),
            additionalProperties: z.record(z.any()),
        })
        .transform((v) => {
            return {
                ...v.additionalProperties,
                ...(v.atType === undefined ? null : { "@type": v.atType }),
            };
        });
}

/** @internal */
export namespace TaskServiceActionResponse$ {
    export type Inbound = {
        TaskView?: TaskView$.Inbound | undefined;
        expanded?: Array<TaskServiceActionResponseExpanded$.Inbound> | null | undefined;
        ticketActionId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskServiceActionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            TaskView: TaskView$.inboundSchema.optional(),
            expanded: z
                .nullable(z.array(z.lazy(() => TaskServiceActionResponseExpanded$.inboundSchema)))
                .optional(),
            ticketActionId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.TaskView === undefined ? null : { taskView: v.TaskView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.ticketActionId === undefined ? null : { ticketActionId: v.ticketActionId }),
            };
        });

    export type Outbound = {
        TaskView?: TaskView$.Outbound | undefined;
        expanded?: Array<TaskServiceActionResponseExpanded$.Outbound> | null | undefined;
        ticketActionId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskServiceActionResponse> = z
        .object({
            taskView: TaskView$.outboundSchema.optional(),
            expanded: z
                .nullable(z.array(z.lazy(() => TaskServiceActionResponseExpanded$.outboundSchema)))
                .optional(),
            ticketActionId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.taskView === undefined ? null : { TaskView: v.taskView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.ticketActionId === undefined ? null : { ticketActionId: v.ticketActionId }),
            };
        });
}
