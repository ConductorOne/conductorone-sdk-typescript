import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The accountType field.
 */
export declare const AccountType: {
    readonly AppUserTypeUnspecified: "APP_USER_TYPE_UNSPECIFIED";
    readonly AppUserTypeUser: "APP_USER_TYPE_USER";
    readonly AppUserTypeServiceAccount: "APP_USER_TYPE_SERVICE_ACCOUNT";
    readonly AppUserTypeSystemAccount: "APP_USER_TYPE_SYSTEM_ACCOUNT";
};
/**
 * The accountType field.
 */
export type AccountType = OpenEnum<typeof AccountType>;
/**
 * The AccountFilter message.
 */
export type AccountFilter = {
    /**
     * The accountType field.
     */
    accountType?: AccountType | null | undefined;
};
/** @internal */
export declare const AccountType$inboundSchema: z.ZodType<AccountType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountType$outboundSchema: z.ZodType<AccountType, z.ZodTypeDef, AccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountType$ {
    /** @deprecated use `AccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountType, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountType, z.ZodTypeDef, AccountType>;
}
/** @internal */
export declare const AccountFilter$inboundSchema: z.ZodType<AccountFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountFilter$Outbound = {
    accountType?: string | null | undefined;
};
/** @internal */
export declare const AccountFilter$outboundSchema: z.ZodType<AccountFilter$Outbound, z.ZodTypeDef, AccountFilter>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountFilter$ {
    /** @deprecated use `AccountFilter$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountFilter, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountFilter$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountFilter$Outbound, z.ZodTypeDef, AccountFilter>;
    /** @deprecated use `AccountFilter$Outbound` instead. */
    type Outbound = AccountFilter$Outbound;
}
export declare function accountFilterToJSON(accountFilter: AccountFilter): string;
export declare function accountFilterFromJSON(jsonString: string): SafeParseResult<AccountFilter, SDKValidationError>;
