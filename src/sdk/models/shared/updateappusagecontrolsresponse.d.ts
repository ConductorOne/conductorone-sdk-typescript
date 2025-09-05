import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUsageControls, AppUsageControls$Outbound } from "./appusagecontrols.js";
/**
 * The UpdateAppUsageControlsResponse message contains the updated AppUsageControls object.
 */
export type UpdateAppUsageControlsResponse = {
    appUsageControls?: AppUsageControls | null | undefined;
};
/** @internal */
export declare const UpdateAppUsageControlsResponse$inboundSchema: z.ZodType<UpdateAppUsageControlsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppUsageControlsResponse$Outbound = {
    appUsageControls?: AppUsageControls$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateAppUsageControlsResponse$outboundSchema: z.ZodType<UpdateAppUsageControlsResponse$Outbound, z.ZodTypeDef, UpdateAppUsageControlsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppUsageControlsResponse$ {
    /** @deprecated use `UpdateAppUsageControlsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppUsageControlsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppUsageControlsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppUsageControlsResponse$Outbound, z.ZodTypeDef, UpdateAppUsageControlsResponse>;
    /** @deprecated use `UpdateAppUsageControlsResponse$Outbound` instead. */
    type Outbound = UpdateAppUsageControlsResponse$Outbound;
}
export declare function updateAppUsageControlsResponseToJSON(updateAppUsageControlsResponse: UpdateAppUsageControlsResponse): string;
export declare function updateAppUsageControlsResponseFromJSON(jsonString: string): SafeParseResult<UpdateAppUsageControlsResponse, SDKValidationError>;
