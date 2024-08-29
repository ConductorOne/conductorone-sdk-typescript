/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1AppsDeleteRequest = {
    deleteAppRequest?: shared.DeleteAppRequest | undefined;
    id: string;
};

export type C1ApiAppV1AppsDeleteResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Empty response body. Status code indicates success.
     */
    deleteAppResponse?: shared.DeleteAppResponse | undefined;
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
export namespace C1ApiAppV1AppsDeleteRequest$ {
    export type Inbound = {
        DeleteAppRequest?: shared.DeleteAppRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<C1ApiAppV1AppsDeleteRequest, z.ZodTypeDef, Inbound> = z
        .object({
            DeleteAppRequest: shared.DeleteAppRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.DeleteAppRequest === undefined
                    ? null
                    : { deleteAppRequest: v.DeleteAppRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        DeleteAppRequest?: shared.DeleteAppRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, C1ApiAppV1AppsDeleteRequest> = z
        .object({
            deleteAppRequest: shared.DeleteAppRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.deleteAppRequest === undefined
                    ? null
                    : { DeleteAppRequest: v.deleteAppRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace C1ApiAppV1AppsDeleteResponse$ {
    export type Inbound = {
        ContentType: string;
        DeleteAppResponse?: shared.DeleteAppResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<C1ApiAppV1AppsDeleteResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DeleteAppResponse: shared.DeleteAppResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DeleteAppResponse === undefined
                    ? null
                    : { deleteAppResponse: v.DeleteAppResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DeleteAppResponse?: shared.DeleteAppResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, C1ApiAppV1AppsDeleteResponse> = z
        .object({
            contentType: z.string(),
            deleteAppResponse: shared.DeleteAppResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.deleteAppResponse === undefined
                    ? null
                    : { DeleteAppResponse: v.deleteAppResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
