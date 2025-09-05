import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The identityMatching field.
 */
export declare const IdentityMatching: {
    readonly AppUserIdentityMatchingUnspecified: "APP_USER_IDENTITY_MATCHING_UNSPECIFIED";
    readonly AppUserIdentityMatchingStrict: "APP_USER_IDENTITY_MATCHING_STRICT";
    readonly AppUserIdentityMatchingDisplayName: "APP_USER_IDENTITY_MATCHING_DISPLAY_NAME";
};
/**
 * The identityMatching field.
 */
export type IdentityMatching = OpenEnum<typeof IdentityMatching>;
/**
 * The App object provides all of the details for an app, as well as some configuration.
 */
export type App = {
    /**
     * The ID of the Account named by AccountName.
     */
    appAccountId?: string | null | undefined;
    /**
     * The AccountName of the app. For example, AWS is AccountID, Github is Org Name, and Okta is Okta Subdomain.
     */
    appAccountName?: string | null | undefined;
    /**
     * The owners of the app.
     */
    appOwners?: Array<User> | null | undefined;
    /**
     * The ID of the Certify Policy associated with this App.
     */
    certifyPolicyId?: string | null | undefined;
    /**
     * The connectorVersion field.
     */
    connectorVersion?: number | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The ID for the default request catalog for this app.
     */
    defaultRequestCatalogId?: string | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The app's description.
     */
    description?: string | null | undefined;
    /**
     * The app's display name.
     */
    displayName?: string | null | undefined;
    fieldMask?: string | null | undefined;
    /**
     * The ID of the Grant Policy associated with this App.
     */
    grantPolicyId?: string | null | undefined;
    /**
     * The URL of an icon to display for the app.
     */
    iconUrl?: string | null | undefined;
    /**
     * The ID of the app.
     */
    id?: string | null | undefined;
    /**
     * The identityMatching field.
     */
    identityMatching?: IdentityMatching | null | undefined;
    /**
     * If you add instructions here, they will be shown to users in the access request form when requesting access for this app.
     */
    instructions?: string | null | undefined;
    /**
     * Specifies if the app is a directory.
     */
    isDirectory?: boolean | null | undefined;
    /**
     * The isManuallyManaged field.
     */
    isManuallyManaged?: boolean | null | undefined;
    /**
     * The URL of a logo to display for the app.
     */
    logoUri?: string | null | undefined;
    /**
     * The cost of an app per-seat, so that total cost can be calculated by the grant count.
     */
    monthlyCostUsd?: number | null | undefined;
    /**
     * The ID of the app that created this app, if any.
     */
    parentAppId?: string | null | undefined;
    /**
     * The ID of the Revoke Policy associated with this App.
     */
    revokePolicyId?: string | null | undefined;
    /**
     * The strictAccessEntitlementProvisioning field.
     */
    strictAccessEntitlementProvisioning?: boolean | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The number of users with grants to this app.
     */
    userCount?: number | null | undefined;
};
/**
 * The App object provides all of the details for an app, as well as some configuration.
 */
export type AppInput = {
    /**
     * The ID of the Certify Policy associated with this App.
     */
    certifyPolicyId?: string | null | undefined;
    /**
     * The connectorVersion field.
     */
    connectorVersion?: number | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The ID for the default request catalog for this app.
     */
    defaultRequestCatalogId?: string | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The app's description.
     */
    description?: string | null | undefined;
    /**
     * The app's display name.
     */
    displayName?: string | null | undefined;
    fieldMask?: string | null | undefined;
    /**
     * The ID of the Grant Policy associated with this App.
     */
    grantPolicyId?: string | null | undefined;
    /**
     * The URL of an icon to display for the app.
     */
    iconUrl?: string | null | undefined;
    /**
     * The identityMatching field.
     */
    identityMatching?: IdentityMatching | null | undefined;
    /**
     * If you add instructions here, they will be shown to users in the access request form when requesting access for this app.
     */
    instructions?: string | null | undefined;
    /**
     * The isManuallyManaged field.
     */
    isManuallyManaged?: boolean | null | undefined;
    /**
     * The cost of an app per-seat, so that total cost can be calculated by the grant count.
     */
    monthlyCostUsd?: number | null | undefined;
    /**
     * The ID of the Revoke Policy associated with this App.
     */
    revokePolicyId?: string | null | undefined;
    /**
     * The strictAccessEntitlementProvisioning field.
     */
    strictAccessEntitlementProvisioning?: boolean | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const IdentityMatching$inboundSchema: z.ZodType<IdentityMatching, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentityMatching$outboundSchema: z.ZodType<IdentityMatching, z.ZodTypeDef, IdentityMatching>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityMatching$ {
    /** @deprecated use `IdentityMatching$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityMatching, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityMatching$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityMatching, z.ZodTypeDef, IdentityMatching>;
}
/** @internal */
export declare const App$inboundSchema: z.ZodType<App, z.ZodTypeDef, unknown>;
/** @internal */
export type App$Outbound = {
    appAccountId?: string | null | undefined;
    appAccountName?: string | null | undefined;
    appOwners?: Array<User$Outbound> | null | undefined;
    certifyPolicyId?: string | null | undefined;
    connectorVersion?: number | null | undefined;
    createdAt?: string | null | undefined;
    defaultRequestCatalogId?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    fieldMask?: string | null | undefined;
    grantPolicyId?: string | null | undefined;
    iconUrl?: string | null | undefined;
    id?: string | null | undefined;
    identityMatching?: string | null | undefined;
    instructions?: string | null | undefined;
    isDirectory?: boolean | null | undefined;
    isManuallyManaged?: boolean | null | undefined;
    logoUri?: string | null | undefined;
    monthlyCostUsd?: number | null | undefined;
    parentAppId?: string | null | undefined;
    revokePolicyId?: string | null | undefined;
    strictAccessEntitlementProvisioning?: boolean | null | undefined;
    updatedAt?: string | null | undefined;
    userCount?: string | null | undefined;
};
/** @internal */
export declare const App$outboundSchema: z.ZodType<App$Outbound, z.ZodTypeDef, App>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace App$ {
    /** @deprecated use `App$inboundSchema` instead. */
    const inboundSchema: z.ZodType<App, z.ZodTypeDef, unknown>;
    /** @deprecated use `App$outboundSchema` instead. */
    const outboundSchema: z.ZodType<App$Outbound, z.ZodTypeDef, App>;
    /** @deprecated use `App$Outbound` instead. */
    type Outbound = App$Outbound;
}
export declare function appToJSON(app: App): string;
export declare function appFromJSON(jsonString: string): SafeParseResult<App, SDKValidationError>;
/** @internal */
export declare const AppInput$inboundSchema: z.ZodType<AppInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppInput$Outbound = {
    certifyPolicyId?: string | null | undefined;
    connectorVersion?: number | null | undefined;
    createdAt?: string | null | undefined;
    defaultRequestCatalogId?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    fieldMask?: string | null | undefined;
    grantPolicyId?: string | null | undefined;
    iconUrl?: string | null | undefined;
    identityMatching?: string | null | undefined;
    instructions?: string | null | undefined;
    isManuallyManaged?: boolean | null | undefined;
    monthlyCostUsd?: number | null | undefined;
    revokePolicyId?: string | null | undefined;
    strictAccessEntitlementProvisioning?: boolean | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppInput$outboundSchema: z.ZodType<AppInput$Outbound, z.ZodTypeDef, AppInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppInput$ {
    /** @deprecated use `AppInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppInput$Outbound, z.ZodTypeDef, AppInput>;
    /** @deprecated use `AppInput$Outbound` instead. */
    type Outbound = AppInput$Outbound;
}
export declare function appInputToJSON(appInput: AppInput): string;
export declare function appInputFromJSON(jsonString: string): SafeParseResult<AppInput, SDKValidationError>;
