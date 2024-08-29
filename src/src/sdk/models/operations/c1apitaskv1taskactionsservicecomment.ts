/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiTaskV1TaskActionsServiceCommentRequest = {
    taskActionsServiceCommentRequest?: shared.TaskActionsServiceCommentRequest | undefined;
    taskId: string;
};

export type C1ApiTaskV1TaskActionsServiceCommentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Task actions service comment response returns the task view inluding the expanded array of items that are indicated by the expand mask on the request.
     */
    taskActionsServiceCommentResponse?: shared.TaskActionsServiceCommentResponse | undefined;
};

/** @internal */
export namespace C1ApiTaskV1TaskActionsServiceCommentRequest$ {
    export type Inbound = {
        TaskActionsServiceCommentRequest?:
            | shared.TaskActionsServiceCommentRequest$.Inbound
            | undefined;
        task_id: string;
    };

    export const inboundSchema: z.ZodType<
        C1ApiTaskV1TaskActionsServiceCommentRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            TaskActionsServiceCommentRequest:
                shared.TaskActionsServiceCommentRequest$.inboundSchema.optional(),
            task_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.TaskActionsServiceCommentRequest === undefined
                    ? null
                    : { taskActionsServiceCommentRequest: v.TaskActionsServiceCommentRequest }),
                taskId: v.task_id,
            };
        });

    export type Outbound = {
        TaskActionsServiceCommentRequest?:
            | shared.TaskActionsServiceCommentRequest$.Outbound
            | undefined;
        task_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiTaskV1TaskActionsServiceCommentRequest
    > = z
        .object({
            taskActionsServiceCommentRequest:
                shared.TaskActionsServiceCommentRequest$.outboundSchema.optional(),
            taskId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.taskActionsServiceCommentRequest === undefined
                    ? null
                    : { TaskActionsServiceCommentRequest: v.taskActionsServiceCommentRequest }),
                task_id: v.taskId,
            };
        });
}

/** @internal */
export namespace C1ApiTaskV1TaskActionsServiceCommentResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TaskActionsServiceCommentResponse?:
            | shared.TaskActionsServiceCommentResponse$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<
        C1ApiTaskV1TaskActionsServiceCommentResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TaskActionsServiceCommentResponse:
                shared.TaskActionsServiceCommentResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TaskActionsServiceCommentResponse === undefined
                    ? null
                    : { taskActionsServiceCommentResponse: v.TaskActionsServiceCommentResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TaskActionsServiceCommentResponse?:
            | shared.TaskActionsServiceCommentResponse$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiTaskV1TaskActionsServiceCommentResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            taskActionsServiceCommentResponse:
                shared.TaskActionsServiceCommentResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.taskActionsServiceCommentResponse === undefined
                    ? null
                    : { TaskActionsServiceCommentResponse: v.taskActionsServiceCommentResponse }),
            };
        });
}
