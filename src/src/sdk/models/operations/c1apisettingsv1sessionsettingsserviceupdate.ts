/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiSettingsV1SessionSettingsServiceUpdateResponse = {
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
     * Successful response
     */
    updateSessionSettingsResponse?: shared.UpdateSessionSettingsResponse | undefined;
};

/** @internal */
export namespace C1ApiSettingsV1SessionSettingsServiceUpdateResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        UpdateSessionSettingsResponse?: shared.UpdateSessionSettingsResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        C1ApiSettingsV1SessionSettingsServiceUpdateResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            UpdateSessionSettingsResponse:
                shared.UpdateSessionSettingsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.UpdateSessionSettingsResponse === undefined
                    ? null
                    : { updateSessionSettingsResponse: v.UpdateSessionSettingsResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        UpdateSessionSettingsResponse?: shared.UpdateSessionSettingsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiSettingsV1SessionSettingsServiceUpdateResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            updateSessionSettingsResponse:
                shared.UpdateSessionSettingsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.updateSessionSettingsResponse === undefined
                    ? null
                    : { UpdateSessionSettingsResponse: v.updateSessionSettingsResponse }),
            };
        });
}
