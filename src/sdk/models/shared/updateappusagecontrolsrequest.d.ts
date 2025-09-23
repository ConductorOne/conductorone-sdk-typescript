import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUsageControls, AppUsageControls$Outbound } from "./appusagecontrols.js";
/**
 * The UpdateAppUsageControlsRequest message contains the AppUsageControls object to update and the update mask.
 */
export type UpdateAppUsageControlsRequest = {
    appUsageControls?: AppUsageControls | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAppUsageControlsRequest$inboundSchema: z.ZodType<UpdateAppUsageControlsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppUsageControlsRequest$Outbound = {
    appUsageControls?: AppUsageControls$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAppUsageControlsRequest$outboundSchema: z.ZodType<UpdateAppUsageControlsRequest$Outbound, z.ZodTypeDef, UpdateAppUsageControlsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppUsageControlsRequest$ {
    /** @deprecated use `UpdateAppUsageControlsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppUsageControlsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppUsageControlsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppUsageControlsRequest$Outbound, z.ZodTypeDef, UpdateAppUsageControlsRequest>;
    /** @deprecated use `UpdateAppUsageControlsRequest$Outbound` instead. */
    type Outbound = UpdateAppUsageControlsRequest$Outbound;
}
export declare function updateAppUsageControlsRequestToJSON(updateAppUsageControlsRequest: UpdateAppUsageControlsRequest): string;
export declare function updateAppUsageControlsRequestFromJSON(jsonString: string): SafeParseResult<UpdateAppUsageControlsRequest, SDKValidationError>;
