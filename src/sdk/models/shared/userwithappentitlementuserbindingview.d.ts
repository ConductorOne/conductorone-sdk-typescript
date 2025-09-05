import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The UserWithAppEntitlementUserBindingView message.
 */
export type UserWithAppEntitlementUserBindingView = {
    /**
     * The appEntitlementId field.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The appUserId field.
     */
    appUserId?: string | null | undefined;
    user?: User | null | undefined;
};
/** @internal */
export declare const UserWithAppEntitlementUserBindingView$inboundSchema: z.ZodType<UserWithAppEntitlementUserBindingView, z.ZodTypeDef, unknown>;
/** @internal */
export type UserWithAppEntitlementUserBindingView$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    user?: User$Outbound | null | undefined;
};
/** @internal */
export declare const UserWithAppEntitlementUserBindingView$outboundSchema: z.ZodType<UserWithAppEntitlementUserBindingView$Outbound, z.ZodTypeDef, UserWithAppEntitlementUserBindingView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserWithAppEntitlementUserBindingView$ {
    /** @deprecated use `UserWithAppEntitlementUserBindingView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserWithAppEntitlementUserBindingView, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserWithAppEntitlementUserBindingView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserWithAppEntitlementUserBindingView$Outbound, z.ZodTypeDef, UserWithAppEntitlementUserBindingView>;
    /** @deprecated use `UserWithAppEntitlementUserBindingView$Outbound` instead. */
    type Outbound = UserWithAppEntitlementUserBindingView$Outbound;
}
export declare function userWithAppEntitlementUserBindingViewToJSON(userWithAppEntitlementUserBindingView: UserWithAppEntitlementUserBindingView): string;
export declare function userWithAppEntitlementUserBindingViewFromJSON(jsonString: string): SafeParseResult<UserWithAppEntitlementUserBindingView, SDKValidationError>;
