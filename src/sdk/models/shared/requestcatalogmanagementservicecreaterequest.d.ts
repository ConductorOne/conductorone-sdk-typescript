import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RequestCatalogExpandMask, RequestCatalogExpandMask$Outbound } from "./requestcatalogexpandmask.js";
/**
 * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
 */
export declare const RequestCatalogManagementServiceCreateRequestEnrollmentBehavior: {
    readonly RequestCatalogEnrollmentBehaviorUnspecified: "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_UNSPECIFIED";
    readonly RequestCatalogEnrollmentBehaviorBypassEntitlementRequestPolicy: "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_BYPASS_ENTITLEMENT_REQUEST_POLICY";
    readonly RequestCatalogEnrollmentBehaviorEnforceEntitlementRequestPolicy: "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_ENFORCE_ENTITLEMENT_REQUEST_POLICY";
};
/**
 * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
 */
export type RequestCatalogManagementServiceCreateRequestEnrollmentBehavior = OpenEnum<typeof RequestCatalogManagementServiceCreateRequestEnrollmentBehavior>;
/**
 * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
 */
export declare const RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior: {
    readonly RequestCatalogUnenrollmentBehaviorUnspecified: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_UNSPECIFIED";
    readonly RequestCatalogUnenrollmentBehaviorLeaveAccessAsIs: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_LEAVE_ACCESS_AS_IS";
    readonly RequestCatalogUnenrollmentBehaviorRevokeAll: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_ALL";
    readonly RequestCatalogUnenrollmentBehaviorRevokeUnjustified: "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_UNJUSTIFIED";
};
/**
 * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
 */
export type RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior = OpenEnum<typeof RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior>;
/**
 * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
 */
export declare const RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior: {
    readonly RequestCatalogUnenrollmentEntitlementBehaviorUnspecified: "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_UNSPECIFIED";
    readonly RequestCatalogUnenrollmentEntitlementBehaviorBypass: "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_BYPASS";
    readonly RequestCatalogUnenrollmentEntitlementBehaviorEnforce: "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_ENFORCE";
};
/**
 * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
 */
export type RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior = OpenEnum<typeof RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior>;
/**
 * Create a request catalog.
 */
export type RequestCatalogManagementServiceCreateRequest = {
    /**
     * The description of the new request catalog.
     */
    description?: string | null | undefined;
    /**
     * The display name of the new request catalog.
     */
    displayName: string;
    /**
     * Defines how to handle the request policies of the entitlements in the catalog during enrollment.
     */
    enrollmentBehavior?: RequestCatalogManagementServiceCreateRequestEnrollmentBehavior | null | undefined;
    expandMask?: RequestCatalogExpandMask | null | undefined;
    /**
     * Whether or not the new catalog should be created as published.
     */
    published?: boolean | null | undefined;
    /**
     * Whether all the entitlements in the catalog can be requests at once. Your tenant must have the bundles feature to use this.
     */
    requestBundle?: boolean | null | undefined;
    /**
     * Defines how to handle the revocation of the entitlements in the catalog during unenrollment.
     */
    unenrollmentBehavior?: RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior | null | undefined;
    /**
     * Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.
     */
    unenrollmentEntitlementBehavior?: RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior | null | undefined;
    /**
     * Whether or not the new catalog is visible to everyone by default.
     */
    visibleToEveryone?: boolean | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequestEnrollmentBehavior$inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestEnrollmentBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequestEnrollmentBehavior$outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestEnrollmentBehavior, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequestEnrollmentBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceCreateRequestEnrollmentBehavior$ {
    /** @deprecated use `RequestCatalogManagementServiceCreateRequestEnrollmentBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestEnrollmentBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceCreateRequestEnrollmentBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestEnrollmentBehavior, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequestEnrollmentBehavior>;
}
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior$inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior$outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior$ {
    /** @deprecated use `RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior>;
}
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior$inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior$outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior$ {
    /** @deprecated use `RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior>;
}
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceCreateRequest$Outbound = {
    description?: string | null | undefined;
    displayName: string;
    enrollmentBehavior?: string | null | undefined;
    expandMask?: RequestCatalogExpandMask$Outbound | null | undefined;
    published?: boolean | null | undefined;
    requestBundle?: boolean | null | undefined;
    unenrollmentBehavior?: string | null | undefined;
    unenrollmentEntitlementBehavior?: string | null | undefined;
    visibleToEveryone?: boolean | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceCreateRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceCreateRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceCreateRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceCreateRequest>;
    /** @deprecated use `RequestCatalogManagementServiceCreateRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceCreateRequest$Outbound;
}
export declare function requestCatalogManagementServiceCreateRequestToJSON(requestCatalogManagementServiceCreateRequest: RequestCatalogManagementServiceCreateRequest): string;
export declare function requestCatalogManagementServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceCreateRequest, SDKValidationError>;
