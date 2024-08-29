/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiSettingsV1AWSExternalIDSettingsGetResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successful response
     */
    getAWSExternalIDResponse?: shared.GetAWSExternalIDResponse | undefined;
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
export namespace C1ApiSettingsV1AWSExternalIDSettingsGetResponse$ {
    export type Inbound = {
        ContentType: string;
        GetAWSExternalIDResponse?: shared.GetAWSExternalIDResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        C1ApiSettingsV1AWSExternalIDSettingsGetResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            GetAWSExternalIDResponse: shared.GetAWSExternalIDResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GetAWSExternalIDResponse === undefined
                    ? null
                    : { getAWSExternalIDResponse: v.GetAWSExternalIDResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        GetAWSExternalIDResponse?: shared.GetAWSExternalIDResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiSettingsV1AWSExternalIDSettingsGetResponse
    > = z
        .object({
            contentType: z.string(),
            getAWSExternalIDResponse: shared.GetAWSExternalIDResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.getAWSExternalIDResponse === undefined
                    ? null
                    : { GetAWSExternalIDResponse: v.getAWSExternalIDResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
