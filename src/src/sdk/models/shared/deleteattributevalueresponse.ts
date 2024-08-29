/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * DeleteAttributeValueResponse is the empty response for deleting an attribute value.
 */
export type DeleteAttributeValueResponse = {};

/** @internal */
export namespace DeleteAttributeValueResponse$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteAttributeValueResponse, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAttributeValueResponse> =
        z.object({});
}
