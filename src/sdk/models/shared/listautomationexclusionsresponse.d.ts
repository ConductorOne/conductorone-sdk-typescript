import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserWithAppEntitlementUserBindingView, UserWithAppEntitlementUserBindingView$Outbound } from "./userwithappentitlementuserbindingview.js";
/**
 * The ListAutomationExclusionsResponse message.
 */
export type ListAutomationExclusionsResponse = {
    /**
     * The list field.
     */
    list?: Array<UserWithAppEntitlementUserBindingView> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAutomationExclusionsResponse$inboundSchema: z.ZodType<ListAutomationExclusionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAutomationExclusionsResponse$Outbound = {
    list?: Array<UserWithAppEntitlementUserBindingView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAutomationExclusionsResponse$outboundSchema: z.ZodType<ListAutomationExclusionsResponse$Outbound, z.ZodTypeDef, ListAutomationExclusionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAutomationExclusionsResponse$ {
    /** @deprecated use `ListAutomationExclusionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAutomationExclusionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAutomationExclusionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAutomationExclusionsResponse$Outbound, z.ZodTypeDef, ListAutomationExclusionsResponse>;
    /** @deprecated use `ListAutomationExclusionsResponse$Outbound` instead. */
    type Outbound = ListAutomationExclusionsResponse$Outbound;
}
export declare function listAutomationExclusionsResponseToJSON(listAutomationExclusionsResponse: ListAutomationExclusionsResponse): string;
export declare function listAutomationExclusionsResponseFromJSON(jsonString: string): SafeParseResult<ListAutomationExclusionsResponse, SDKValidationError>;
