import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlement, AppEntitlement$Outbound, AppEntitlementInput, AppEntitlementInput$Outbound } from "./appentitlement.js";
/**
 * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
 */
export declare const EnrollmentBehavior: {
    readonly RequestCatalogEnrollmentBehaviorUnspecified: "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_UNSPECIFIED";
    readonly RequestCatalogEnrollmentBehaviorBypassEntitlementRequestPolicy: "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_BYPASS_ENTITLEMENT_REQUEST_POLICY";
    readonly RequestCatalogEnrollmentBehaviorEnforceEntitlementRequestPolicy: "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_ENFORCE_ENTITLEMENT_REQUEST_POLICY";
};
/**
 * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
 */
export type EnrollmentBehavior = OpenEnum<typeof EnrollmentBehavior>;
/**
 * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
 */
export declare const UnenrollmentBehavior: {
    readonly RequestCatalogUnenrollmentBehaviorUnspecified: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_UNSPECIFIED";
    readonly RequestCatalogUnenrollmentBehaviorLeaveAccessAsIs: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_LEAVE_ACCESS_AS_IS";
    readonly RequestCatalogUnenrollmentBehaviorRevokeAll: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_ALL";
    readonly RequestCatalogUnenrollmentBehaviorRevokeUnjustified: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_UNJUSTIFIED";
};
/**
 * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
 */
export type UnenrollmentBehavior = OpenEnum<typeof UnenrollmentBehavior>;
/**
 * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
 */
export declare const UnenrollmentEntitlementBehavior: {
    readonly RequestCatalogUnenrollmentEntitlementBehaviorUnspecified: "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_UNSPECIFIED";
    readonly RequestCatalogUnenrollmentEntitlementBehaviorBypass: "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_BYPASS";
    readonly RequestCatalogUnenrollmentEntitlementBehaviorEnforce: "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_ENFORCE";
};
/**
 * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
 */
export type UnenrollmentEntitlementBehavior = OpenEnum<typeof UnenrollmentEntitlementBehavior>;
/**
 * The RequestCatalog is used for managing which entitlements are requestable, and who can request them.
 */
export type RequestCatalog = {
    /**
     * An array of app entitlements that, if the user has, can view the contents of this catalog.
     */
    accessEntitlements?: Array<AppEntitlement> | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The id of the user this request catalog was created by.
     */
    createdByUserId?: string | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the request catalog.
     */
    description?: string | null | undefined;
    /**
     * The display name of the request catalog.
     */
    displayName?: string | null | undefined;
    /**
     * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
     */
    enrollmentBehavior?: EnrollmentBehavior | null | undefined;
    /**
     * The id of the request catalog.
     */
    id?: string | null | undefined;
    /**
     * Whether or not this catalog is published.
     */
    published?: boolean | null | undefined;
    /**
     * Whether all the entitlements in the catalog can be requests at once. Your tenant must have the bundles feature to use this.
     */
    requestBundle?: boolean | null | undefined;
    /**
     * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
     */
    unenrollmentBehavior?: UnenrollmentBehavior | null | undefined;
    /**
     * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
     */
    unenrollmentEntitlementBehavior?: UnenrollmentEntitlementBehavior | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * If this is true, the access entitlement requirement is ignored.
     */
    visibleToEveryone?: boolean | null | undefined;
};
/**
 * The RequestCatalog is used for managing which entitlements are requestable, and who can request them.
 */
export type RequestCatalogInput = {
    /**
     * An array of app entitlements that, if the user has, can view the contents of this catalog.
     */
    accessEntitlements?: Array<AppEntitlementInput> | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The id of the user this request catalog was created by.
     */
    createdByUserId?: string | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the request catalog.
     */
    description?: string | null | undefined;
    /**
     * The display name of the request catalog.
     */
    displayName?: string | null | undefined;
    /**
     * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
     */
    enrollmentBehavior?: EnrollmentBehavior | null | undefined;
    /**
     * The id of the request catalog.
     */
    id?: string | null | undefined;
    /**
     * Whether or not this catalog is published.
     */
    published?: boolean | null | undefined;
    /**
     * Whether all the entitlements in the catalog can be requests at once. Your tenant must have the bundles feature to use this.
     */
    requestBundle?: boolean | null | undefined;
    /**
     * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
     */
    unenrollmentBehavior?: UnenrollmentBehavior | null | undefined;
    /**
     * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
     */
    unenrollmentEntitlementBehavior?: UnenrollmentEntitlementBehavior | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * If this is true, the access entitlement requirement is ignored.
     */
    visibleToEveryone?: boolean | null | undefined;
};
/** @internal */
export declare const EnrollmentBehavior$inboundSchema: z.ZodType<EnrollmentBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentBehavior$outboundSchema: z.ZodType<EnrollmentBehavior, z.ZodTypeDef, EnrollmentBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentBehavior$ {
    /** @deprecated use `EnrollmentBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentBehavior, z.ZodTypeDef, EnrollmentBehavior>;
}
/** @internal */
export declare const UnenrollmentBehavior$inboundSchema: z.ZodType<UnenrollmentBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UnenrollmentBehavior$outboundSchema: z.ZodType<UnenrollmentBehavior, z.ZodTypeDef, UnenrollmentBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnenrollmentBehavior$ {
    /** @deprecated use `UnenrollmentBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnenrollmentBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnenrollmentBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnenrollmentBehavior, z.ZodTypeDef, UnenrollmentBehavior>;
}
/** @internal */
export declare const UnenrollmentEntitlementBehavior$inboundSchema: z.ZodType<UnenrollmentEntitlementBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UnenrollmentEntitlementBehavior$outboundSchema: z.ZodType<UnenrollmentEntitlementBehavior, z.ZodTypeDef, UnenrollmentEntitlementBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnenrollmentEntitlementBehavior$ {
    /** @deprecated use `UnenrollmentEntitlementBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnenrollmentEntitlementBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnenrollmentEntitlementBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnenrollmentEntitlementBehavior, z.ZodTypeDef, UnenrollmentEntitlementBehavior>;
}
/** @internal */
export declare const RequestCatalog$inboundSchema: z.ZodType<RequestCatalog, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalog$Outbound = {
    accessEntitlements?: Array<AppEntitlement$Outbound> | null | undefined;
    createdAt?: string | null | undefined;
    createdByUserId?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    enrollmentBehavior?: string | null | undefined;
    id?: string | null | undefined;
    published?: boolean | null | undefined;
    requestBundle?: boolean | null | undefined;
    unenrollmentBehavior?: string | null | undefined;
    unenrollmentEntitlementBehavior?: string | null | undefined;
    updatedAt?: string | null | undefined;
    visibleToEveryone?: boolean | null | undefined;
};
/** @internal */
export declare const RequestCatalog$outboundSchema: z.ZodType<RequestCatalog$Outbound, z.ZodTypeDef, RequestCatalog>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalog$ {
    /** @deprecated use `RequestCatalog$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalog, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalog$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalog$Outbound, z.ZodTypeDef, RequestCatalog>;
    /** @deprecated use `RequestCatalog$Outbound` instead. */
    type Outbound = RequestCatalog$Outbound;
}
export declare function requestCatalogToJSON(requestCatalog: RequestCatalog): string;
export declare function requestCatalogFromJSON(jsonString: string): SafeParseResult<RequestCatalog, SDKValidationError>;
/** @internal */
export declare const RequestCatalogInput$inboundSchema: z.ZodType<RequestCatalogInput, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogInput$Outbound = {
    accessEntitlements?: Array<AppEntitlementInput$Outbound> | null | undefined;
    createdAt?: string | null | undefined;
    createdByUserId?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    enrollmentBehavior?: string | null | undefined;
    id?: string | null | undefined;
    published?: boolean | null | undefined;
    requestBundle?: boolean | null | undefined;
    unenrollmentBehavior?: string | null | undefined;
    unenrollmentEntitlementBehavior?: string | null | undefined;
    updatedAt?: string | null | undefined;
    visibleToEveryone?: boolean | null | undefined;
};
/** @internal */
export declare const RequestCatalogInput$outboundSchema: z.ZodType<RequestCatalogInput$Outbound, z.ZodTypeDef, RequestCatalogInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogInput$ {
    /** @deprecated use `RequestCatalogInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogInput$Outbound, z.ZodTypeDef, RequestCatalogInput>;
    /** @deprecated use `RequestCatalogInput$Outbound` instead. */
    type Outbound = RequestCatalogInput$Outbound;
}
export declare function requestCatalogInputToJSON(requestCatalogInput: RequestCatalogInput): string;
export declare function requestCatalogInputFromJSON(jsonString: string): SafeParseResult<RequestCatalogInput, SDKValidationError>;
