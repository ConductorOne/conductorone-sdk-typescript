import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUsageControls, AppUsageControls$Outbound } from "./appusagecontrols.js";
/**
 * The GetAppUsageControlsResponse message contains the retrieved AppUsageControls object.
 */
export type GetAppUsageControlsResponse = {
    appUsageControls?: AppUsageControls | null | undefined;
    /**
     * HasUsageData is false if the access entitlement for this app has no usage data.
     */
    hasUsageData?: boolean | null | undefined;
};
/** @internal */
export declare const GetAppUsageControlsResponse$inboundSchema: z.ZodType<GetAppUsageControlsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppUsageControlsResponse$Outbound = {
    appUsageControls?: AppUsageControls$Outbound | null | undefined;
    hasUsageData?: boolean | null | undefined;
};
/** @internal */
export declare const GetAppUsageControlsResponse$outboundSchema: z.ZodType<GetAppUsageControlsResponse$Outbound, z.ZodTypeDef, GetAppUsageControlsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppUsageControlsResponse$ {
    /** @deprecated use `GetAppUsageControlsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppUsageControlsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppUsageControlsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppUsageControlsResponse$Outbound, z.ZodTypeDef, GetAppUsageControlsResponse>;
    /** @deprecated use `GetAppUsageControlsResponse$Outbound` instead. */
    type Outbound = GetAppUsageControlsResponse$Outbound;
}
export declare function getAppUsageControlsResponseToJSON(getAppUsageControlsResponse: GetAppUsageControlsResponse): string;
export declare function getAppUsageControlsResponseFromJSON(jsonString: string): SafeParseResult<GetAppUsageControlsResponse, SDKValidationError>;
