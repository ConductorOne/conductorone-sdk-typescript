import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DurationUnset = {};
/**
 * The last applied state of the app access request defaults.
 */
export declare const State: {
    readonly AppAccessRequestDefaultsLastApplyStateUnspecified: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_UNSPECIFIED";
    readonly AppAccessRequestDefaultsLastApplyStateRunning: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_RUNNING";
    readonly AppAccessRequestDefaultsLastApplyStateSuccess: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_SUCCESS";
    readonly AppAccessRequestDefaultsLastApplyStateFailed: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_FAILED";
    readonly AppAccessRequestDefaultsLastApplyStateCanceling: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_CANCELING";
    readonly AppAccessRequestDefaultsLastApplyStateCancelSuccess: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_CANCEL_SUCCESS";
    readonly AppAccessRequestDefaultsLastApplyStateCancelError: "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_CANCEL_ERROR";
};
/**
 * The last applied state of the app access request defaults.
 */
export type State = OpenEnum<typeof State>;
/**
 * The AppAccessRequestDefaults message.
 *
 * @remarks
 *
 * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
 *   - durationUnset
 *   - durationGrant
 */
export type AppAccessRequestDefaults = {
    /**
     * The app id for the app access request rule
     */
    appId?: string | null | undefined;
    /**
     * The request catalog ids for the app access request rule.
     */
    catalogIds?: Array<string> | null | undefined;
    /**
     * If true the app level request configuration will be applied to specified resource types.
     */
    defaultsEnabled?: boolean | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: DurationUnset | null | undefined;
    /**
     * If emergency grants are enabled for this app access request rule.
     */
    emergencyGrantEnabled?: boolean | null | undefined;
    /**
     * The policy id for the emergency grant policy.
     */
    emergencyGrantPolicyId?: string | null | undefined;
    /**
     * The requestPolicyId field.
     */
    requestPolicyId?: string | null | undefined;
    /**
     * The app resource type ids for which the app access request defaults are applied.
     */
    resourceTypeIds?: Array<string> | null | undefined;
    /**
     * The last applied state of the app access request defaults.
     */
    state?: State | null | undefined;
};
/**
 * The AppAccessRequestDefaults message.
 *
 * @remarks
 *
 * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
 *   - durationUnset
 *   - durationGrant
 */
export type AppAccessRequestDefaults1 = {
    /**
     * The request catalog ids for the app access request rule.
     */
    catalogIds?: Array<string> | null | undefined;
    /**
     * If true the app level request configuration will be applied to specified resource types.
     */
    defaultsEnabled?: boolean | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: DurationUnset | null | undefined;
    /**
     * If emergency grants are enabled for this app access request rule.
     */
    emergencyGrantEnabled?: boolean | null | undefined;
    /**
     * The policy id for the emergency grant policy.
     */
    emergencyGrantPolicyId?: string | null | undefined;
    /**
     * The requestPolicyId field.
     */
    requestPolicyId?: string | null | undefined;
    /**
     * The app resource type ids for which the app access request defaults are applied.
     */
    resourceTypeIds?: Array<string> | null | undefined;
    /**
     * The last applied state of the app access request defaults.
     */
    state?: State | null | undefined;
};
/** @internal */
export declare const DurationUnset$inboundSchema: z.ZodType<DurationUnset, z.ZodTypeDef, unknown>;
/** @internal */
export type DurationUnset$Outbound = {};
/** @internal */
export declare const DurationUnset$outboundSchema: z.ZodType<DurationUnset$Outbound, z.ZodTypeDef, DurationUnset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DurationUnset$ {
    /** @deprecated use `DurationUnset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DurationUnset, z.ZodTypeDef, unknown>;
    /** @deprecated use `DurationUnset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DurationUnset$Outbound, z.ZodTypeDef, DurationUnset>;
    /** @deprecated use `DurationUnset$Outbound` instead. */
    type Outbound = DurationUnset$Outbound;
}
export declare function durationUnsetToJSON(durationUnset: DurationUnset): string;
export declare function durationUnsetFromJSON(jsonString: string): SafeParseResult<DurationUnset, SDKValidationError>;
/** @internal */
export declare const State$inboundSchema: z.ZodType<State, z.ZodTypeDef, unknown>;
/** @internal */
export declare const State$outboundSchema: z.ZodType<State, z.ZodTypeDef, State>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace State$ {
    /** @deprecated use `State$inboundSchema` instead. */
    const inboundSchema: z.ZodType<State, z.ZodTypeDef, unknown>;
    /** @deprecated use `State$outboundSchema` instead. */
    const outboundSchema: z.ZodType<State, z.ZodTypeDef, State>;
}
/** @internal */
export declare const AppAccessRequestDefaults$inboundSchema: z.ZodType<AppAccessRequestDefaults, z.ZodTypeDef, unknown>;
/** @internal */
export type AppAccessRequestDefaults$Outbound = {
    appId?: string | null | undefined;
    catalogIds?: Array<string> | null | undefined;
    defaultsEnabled?: boolean | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: DurationUnset$Outbound | null | undefined;
    emergencyGrantEnabled?: boolean | null | undefined;
    emergencyGrantPolicyId?: string | null | undefined;
    requestPolicyId?: string | null | undefined;
    resourceTypeIds?: Array<string> | null | undefined;
    state?: string | null | undefined;
};
/** @internal */
export declare const AppAccessRequestDefaults$outboundSchema: z.ZodType<AppAccessRequestDefaults$Outbound, z.ZodTypeDef, AppAccessRequestDefaults>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppAccessRequestDefaults$ {
    /** @deprecated use `AppAccessRequestDefaults$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppAccessRequestDefaults, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppAccessRequestDefaults$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppAccessRequestDefaults$Outbound, z.ZodTypeDef, AppAccessRequestDefaults>;
    /** @deprecated use `AppAccessRequestDefaults$Outbound` instead. */
    type Outbound = AppAccessRequestDefaults$Outbound;
}
export declare function appAccessRequestDefaultsToJSON(appAccessRequestDefaults: AppAccessRequestDefaults): string;
export declare function appAccessRequestDefaultsFromJSON(jsonString: string): SafeParseResult<AppAccessRequestDefaults, SDKValidationError>;
/** @internal */
export declare const AppAccessRequestDefaults1$inboundSchema: z.ZodType<AppAccessRequestDefaults1, z.ZodTypeDef, unknown>;
/** @internal */
export type AppAccessRequestDefaults1$Outbound = {
    catalogIds?: Array<string> | null | undefined;
    defaultsEnabled?: boolean | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: DurationUnset$Outbound | null | undefined;
    emergencyGrantEnabled?: boolean | null | undefined;
    emergencyGrantPolicyId?: string | null | undefined;
    requestPolicyId?: string | null | undefined;
    resourceTypeIds?: Array<string> | null | undefined;
    state?: string | null | undefined;
};
/** @internal */
export declare const AppAccessRequestDefaults1$outboundSchema: z.ZodType<AppAccessRequestDefaults1$Outbound, z.ZodTypeDef, AppAccessRequestDefaults1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppAccessRequestDefaults1$ {
    /** @deprecated use `AppAccessRequestDefaults1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppAccessRequestDefaults1, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppAccessRequestDefaults1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppAccessRequestDefaults1$Outbound, z.ZodTypeDef, AppAccessRequestDefaults1>;
    /** @deprecated use `AppAccessRequestDefaults1$Outbound` instead. */
    type Outbound = AppAccessRequestDefaults1$Outbound;
}
export declare function appAccessRequestDefaults1ToJSON(appAccessRequestDefaults1: AppAccessRequestDefaults1): string;
export declare function appAccessRequestDefaults1FromJSON(jsonString: string): SafeParseResult<AppAccessRequestDefaults1, SDKValidationError>;
