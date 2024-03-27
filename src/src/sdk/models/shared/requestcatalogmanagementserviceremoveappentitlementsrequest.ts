/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppEntitlementRef, AppEntitlementRef$ } from "./appentitlementref";
import * as z from "zod";

/**
 * The RequestCatalogManagementServiceRemoveAppEntitlementsRequest message is used to remove app entitlements from a request catalog.
 */
export type RequestCatalogManagementServiceRemoveAppEntitlementsRequest = {
    /**
     * The list of app entitlements to remove from the catalog.
     */
    appEntitlements?: Array<AppEntitlementRef> | null | undefined;
};

/** @internal */
export namespace RequestCatalogManagementServiceRemoveAppEntitlementsRequest$ {
    export type Inbound = {
        appEntitlements?: Array<AppEntitlementRef$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        RequestCatalogManagementServiceRemoveAppEntitlementsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            appEntitlements: z.nullable(z.array(AppEntitlementRef$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.appEntitlements === undefined
                    ? null
                    : { appEntitlements: v.appEntitlements }),
            };
        });

    export type Outbound = {
        appEntitlements?: Array<AppEntitlementRef$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RequestCatalogManagementServiceRemoveAppEntitlementsRequest
    > = z
        .object({
            appEntitlements: z.nullable(z.array(AppEntitlementRef$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.appEntitlements === undefined
                    ? null
                    : { appEntitlements: v.appEntitlements }),
            };
        });
}
