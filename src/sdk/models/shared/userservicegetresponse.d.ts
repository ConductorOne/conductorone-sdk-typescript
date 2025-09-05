import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserView, UserView$Outbound } from "./userview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type UserServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The UserServiceGetResponse returns a user view which has a user including JSONPATHs to the expanded items in the expanded array.
 */
export type UserServiceGetResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<UserServiceGetResponseExpanded> | null | undefined;
    userView?: UserView | null | undefined;
};
/** @internal */
export declare const UserServiceGetResponseExpanded$inboundSchema: z.ZodType<UserServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type UserServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const UserServiceGetResponseExpanded$outboundSchema: z.ZodType<UserServiceGetResponseExpanded$Outbound, z.ZodTypeDef, UserServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserServiceGetResponseExpanded$ {
    /** @deprecated use `UserServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserServiceGetResponseExpanded$Outbound, z.ZodTypeDef, UserServiceGetResponseExpanded>;
    /** @deprecated use `UserServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = UserServiceGetResponseExpanded$Outbound;
}
export declare function userServiceGetResponseExpandedToJSON(userServiceGetResponseExpanded: UserServiceGetResponseExpanded): string;
export declare function userServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<UserServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const UserServiceGetResponse$inboundSchema: z.ZodType<UserServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UserServiceGetResponse$Outbound = {
    expanded?: Array<UserServiceGetResponseExpanded$Outbound> | null | undefined;
    userView?: UserView$Outbound | null | undefined;
};
/** @internal */
export declare const UserServiceGetResponse$outboundSchema: z.ZodType<UserServiceGetResponse$Outbound, z.ZodTypeDef, UserServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserServiceGetResponse$ {
    /** @deprecated use `UserServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserServiceGetResponse$Outbound, z.ZodTypeDef, UserServiceGetResponse>;
    /** @deprecated use `UserServiceGetResponse$Outbound` instead. */
    type Outbound = UserServiceGetResponse$Outbound;
}
export declare function userServiceGetResponseToJSON(userServiceGetResponse: UserServiceGetResponse): string;
export declare function userServiceGetResponseFromJSON(jsonString: string): SafeParseResult<UserServiceGetResponse, SDKValidationError>;
