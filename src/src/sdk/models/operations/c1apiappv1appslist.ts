/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1AppsListRequest = {
    pageSize?: number | undefined;
    pageToken?: string | undefined;
};

export type C1ApiAppV1AppsListResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The ListAppsResponse message contains a list of results and a nextPageToken if applicable.
     */
    listAppsResponse?: shared.ListAppsResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace C1ApiAppV1AppsListRequest$ {
    export type Inbound = {
        page_size?: number | undefined;
        page_token?: string | undefined;
    };

    export const inboundSchema: z.ZodType<C1ApiAppV1AppsListRequest, z.ZodTypeDef, Inbound> = z
        .object({
            page_size: z.number().int().optional(),
            page_token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.page_size === undefined ? null : { pageSize: v.page_size }),
                ...(v.page_token === undefined ? null : { pageToken: v.page_token }),
            };
        });

    export type Outbound = {
        page_size?: number | undefined;
        page_token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, C1ApiAppV1AppsListRequest> = z
        .object({
            pageSize: z.number().int().optional(),
            pageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.pageSize === undefined ? null : { page_size: v.pageSize }),
                ...(v.pageToken === undefined ? null : { page_token: v.pageToken }),
            };
        });
}

/** @internal */
export namespace C1ApiAppV1AppsListResponse$ {
    export type Inbound = {
        ContentType: string;
        ListAppsResponse?: shared.ListAppsResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<C1ApiAppV1AppsListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ListAppsResponse: shared.ListAppsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ListAppsResponse === undefined
                    ? null
                    : { listAppsResponse: v.ListAppsResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ListAppsResponse?: shared.ListAppsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, C1ApiAppV1AppsListResponse> = z
        .object({
            contentType: z.string(),
            listAppsResponse: shared.ListAppsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.listAppsResponse === undefined
                    ? null
                    : { ListAppsResponse: v.listAppsResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
