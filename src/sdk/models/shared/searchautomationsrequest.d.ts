import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationTemplateRef, AutomationTemplateRef$Outbound } from "./automationtemplateref.js";
export declare const TriggerTypes: {
    readonly TriggerTypeUnspecified: "TRIGGER_TYPE_UNSPECIFIED";
    readonly TriggerTypeUserProfileChange: "TRIGGER_TYPE_USER_PROFILE_CHANGE";
    readonly TriggerTypeAppUserCreate: "TRIGGER_TYPE_APP_USER_CREATE";
    readonly TriggerTypeAppUserUpdate: "TRIGGER_TYPE_APP_USER_UPDATE";
    readonly TriggerTypeUnusedAccess: "TRIGGER_TYPE_UNUSED_ACCESS";
    readonly TriggerTypeUserCreated: "TRIGGER_TYPE_USER_CREATED";
    readonly TriggerTypeGrantFound: "TRIGGER_TYPE_GRANT_FOUND";
    readonly TriggerTypeGrantDeleted: "TRIGGER_TYPE_GRANT_DELETED";
    readonly TriggerTypeWebhook: "TRIGGER_TYPE_WEBHOOK";
    readonly TriggerTypeSchedule: "TRIGGER_TYPE_SCHEDULE";
    readonly TriggerTypeForm: "TRIGGER_TYPE_FORM";
};
export type TriggerTypes = OpenEnum<typeof TriggerTypes>;
/**
 * The SearchAutomationsRequest message.
 */
export type SearchAutomationsRequest = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<AutomationTemplateRef> | null | undefined;
    /**
     * The triggerTypes field.
     */
    triggerTypes?: Array<TriggerTypes> | null | undefined;
};
/** @internal */
export declare const TriggerTypes$inboundSchema: z.ZodType<TriggerTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TriggerTypes$outboundSchema: z.ZodType<TriggerTypes, z.ZodTypeDef, TriggerTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TriggerTypes$ {
    /** @deprecated use `TriggerTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TriggerTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `TriggerTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TriggerTypes, z.ZodTypeDef, TriggerTypes>;
}
/** @internal */
export declare const SearchAutomationsRequest$inboundSchema: z.ZodType<SearchAutomationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationsRequest$Outbound = {
    appId?: string | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<AutomationTemplateRef$Outbound> | null | undefined;
    triggerTypes?: Array<string> | null | undefined;
};
/** @internal */
export declare const SearchAutomationsRequest$outboundSchema: z.ZodType<SearchAutomationsRequest$Outbound, z.ZodTypeDef, SearchAutomationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationsRequest$ {
    /** @deprecated use `SearchAutomationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationsRequest$Outbound, z.ZodTypeDef, SearchAutomationsRequest>;
    /** @deprecated use `SearchAutomationsRequest$Outbound` instead. */
    type Outbound = SearchAutomationsRequest$Outbound;
}
export declare function searchAutomationsRequestToJSON(searchAutomationsRequest: SearchAutomationsRequest): string;
export declare function searchAutomationsRequestFromJSON(jsonString: string): SafeParseResult<SearchAutomationsRequest, SDKValidationError>;
