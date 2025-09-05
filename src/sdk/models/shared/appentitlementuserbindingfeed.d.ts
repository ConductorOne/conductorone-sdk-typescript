import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The eventType field.
 */
export declare const EventType: {
    readonly GrantEventTypeUnspecified: "GRANT_EVENT_TYPE_UNSPECIFIED";
    readonly GrantEventTypeAdded: "GRANT_EVENT_TYPE_ADDED";
    readonly GrantEventTypeRemoved: "GRANT_EVENT_TYPE_REMOVED";
};
/**
 * The eventType field.
 */
export type EventType = OpenEnum<typeof EventType>;
/**
 * The AppEntitlementUserBindingFeed message.
 */
export type AppEntitlementUserBindingFeed = {
    /**
     * The ID of the app entitlement that the app user has access to
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the app associated with the app entitlement
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app user that has access to the app entitlement
     */
    appUserId?: string | null | undefined;
    date?: Date | null | undefined;
    /**
     * The eventType field.
     */
    eventType?: EventType | null | undefined;
    /**
     * The ticketId field.
     */
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const EventType$inboundSchema: z.ZodType<EventType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EventType$outboundSchema: z.ZodType<EventType, z.ZodTypeDef, EventType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EventType$ {
    /** @deprecated use `EventType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EventType, z.ZodTypeDef, unknown>;
    /** @deprecated use `EventType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EventType, z.ZodTypeDef, EventType>;
}
/** @internal */
export declare const AppEntitlementUserBindingFeed$inboundSchema: z.ZodType<AppEntitlementUserBindingFeed, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserBindingFeed$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    date?: string | null | undefined;
    eventType?: string | null | undefined;
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingFeed$outboundSchema: z.ZodType<AppEntitlementUserBindingFeed$Outbound, z.ZodTypeDef, AppEntitlementUserBindingFeed>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserBindingFeed$ {
    /** @deprecated use `AppEntitlementUserBindingFeed$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserBindingFeed, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserBindingFeed$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserBindingFeed$Outbound, z.ZodTypeDef, AppEntitlementUserBindingFeed>;
    /** @deprecated use `AppEntitlementUserBindingFeed$Outbound` instead. */
    type Outbound = AppEntitlementUserBindingFeed$Outbound;
}
export declare function appEntitlementUserBindingFeedToJSON(appEntitlementUserBindingFeed: AppEntitlementUserBindingFeed): string;
export declare function appEntitlementUserBindingFeedFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserBindingFeed, SDKValidationError>;
