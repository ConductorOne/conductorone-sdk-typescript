import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppInput, AppInput$Outbound } from "./app.js";
/**
 * The UpdateAppRequest message contains the app to update and the fields to update.
 */
export type UpdateAppRequest = {
    app?: AppInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAppRequest$inboundSchema: z.ZodType<UpdateAppRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppRequest$Outbound = {
    app?: AppInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAppRequest$outboundSchema: z.ZodType<UpdateAppRequest$Outbound, z.ZodTypeDef, UpdateAppRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppRequest$ {
    /** @deprecated use `UpdateAppRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppRequest$Outbound, z.ZodTypeDef, UpdateAppRequest>;
    /** @deprecated use `UpdateAppRequest$Outbound` instead. */
    type Outbound = UpdateAppRequest$Outbound;
}
export declare function updateAppRequestToJSON(updateAppRequest: UpdateAppRequest): string;
export declare function updateAppRequestFromJSON(jsonString: string): SafeParseResult<UpdateAppRequest, SDKValidationError>;
