/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppEntitlementView, AppEntitlementView$ } from "./appentitlementview";
import { Facets, Facets$ } from "./facets";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Expanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The AppEntitlementSearchServiceSearchResponse message.
 */
export type AppEntitlementSearchServiceSearchResponse = {
    /**
     * Indicates one value of a facet.
     */
    facets?: Facets | undefined;
    /**
     * List of related objects.
     */
    expanded?: Array<Expanded> | null | undefined;
    /**
     * List of app entitlement view objects.
     */
    list?: Array<AppEntitlementView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | undefined;
};

/** @internal */
export namespace Expanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Expanded, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Expanded> = z
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
export namespace AppEntitlementSearchServiceSearchResponse$ {
    export type Inbound = {
        Facets?: Facets$.Inbound | undefined;
        expanded?: Array<Expanded$.Inbound> | null | undefined;
        list?: Array<AppEntitlementView$.Inbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        AppEntitlementSearchServiceSearchResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            Facets: Facets$.inboundSchema.optional(),
            expanded: z.nullable(z.array(z.lazy(() => Expanded$.inboundSchema))).optional(),
            list: z.nullable(z.array(AppEntitlementView$.inboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.Facets === undefined ? null : { facets: v.Facets }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });

    export type Outbound = {
        Facets?: Facets$.Outbound | undefined;
        expanded?: Array<Expanded$.Outbound> | null | undefined;
        list?: Array<AppEntitlementView$.Outbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AppEntitlementSearchServiceSearchResponse
    > = z
        .object({
            facets: Facets$.outboundSchema.optional(),
            expanded: z.nullable(z.array(z.lazy(() => Expanded$.outboundSchema))).optional(),
            list: z.nullable(z.array(AppEntitlementView$.outboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.facets === undefined ? null : { Facets: v.facets }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });
}
