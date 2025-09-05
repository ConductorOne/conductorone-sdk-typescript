import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserView, UserView$Outbound } from "./userview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type UserServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The UserServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export type UserServiceListResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<UserServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<UserView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const UserServiceListResponseExpanded$inboundSchema: z.ZodType<UserServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type UserServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const UserServiceListResponseExpanded$outboundSchema: z.ZodType<UserServiceListResponseExpanded$Outbound, z.ZodTypeDef, UserServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserServiceListResponseExpanded$ {
    /** @deprecated use `UserServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserServiceListResponseExpanded$Outbound, z.ZodTypeDef, UserServiceListResponseExpanded>;
    /** @deprecated use `UserServiceListResponseExpanded$Outbound` instead. */
    type Outbound = UserServiceListResponseExpanded$Outbound;
}
export declare function userServiceListResponseExpandedToJSON(userServiceListResponseExpanded: UserServiceListResponseExpanded): string;
export declare function userServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<UserServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const UserServiceListResponse$inboundSchema: z.ZodType<UserServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UserServiceListResponse$Outbound = {
    expanded?: Array<UserServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<UserView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const UserServiceListResponse$outboundSchema: z.ZodType<UserServiceListResponse$Outbound, z.ZodTypeDef, UserServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserServiceListResponse$ {
    /** @deprecated use `UserServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserServiceListResponse$Outbound, z.ZodTypeDef, UserServiceListResponse>;
    /** @deprecated use `UserServiceListResponse$Outbound` instead. */
    type Outbound = UserServiceListResponse$Outbound;
}
export declare function userServiceListResponseToJSON(userServiceListResponse: UserServiceListResponse): string;
export declare function userServiceListResponseFromJSON(jsonString: string): SafeParseResult<UserServiceListResponse, SDKValidationError>;
