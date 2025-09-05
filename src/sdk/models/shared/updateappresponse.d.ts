import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { App, App$Outbound } from "./app.js";
/**
 * Returns the updated app's new values.
 */
export type UpdateAppResponse = {
    app?: App | null | undefined;
};
/** @internal */
export declare const UpdateAppResponse$inboundSchema: z.ZodType<UpdateAppResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppResponse$Outbound = {
    app?: App$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateAppResponse$outboundSchema: z.ZodType<UpdateAppResponse$Outbound, z.ZodTypeDef, UpdateAppResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppResponse$ {
    /** @deprecated use `UpdateAppResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppResponse$Outbound, z.ZodTypeDef, UpdateAppResponse>;
    /** @deprecated use `UpdateAppResponse$Outbound` instead. */
    type Outbound = UpdateAppResponse$Outbound;
}
export declare function updateAppResponseToJSON(updateAppResponse: UpdateAppResponse): string;
export declare function updateAppResponseFromJSON(jsonString: string): SafeParseResult<UpdateAppResponse, SDKValidationError>;
