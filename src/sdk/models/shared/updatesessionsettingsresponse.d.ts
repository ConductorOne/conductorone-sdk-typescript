import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { SessionSettings, SessionSettings$Outbound } from "./sessionsettings.js";
/**
 * The UpdateSessionSettingsResponse message.
 */
export type UpdateSessionSettingsResponse = {
    sessionSettings?: SessionSettings | null | undefined;
};
/** @internal */
export declare const UpdateSessionSettingsResponse$inboundSchema: z.ZodType<UpdateSessionSettingsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSessionSettingsResponse$Outbound = {
    sessionSettings?: SessionSettings$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateSessionSettingsResponse$outboundSchema: z.ZodType<UpdateSessionSettingsResponse$Outbound, z.ZodTypeDef, UpdateSessionSettingsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSessionSettingsResponse$ {
    /** @deprecated use `UpdateSessionSettingsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSessionSettingsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSessionSettingsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSessionSettingsResponse$Outbound, z.ZodTypeDef, UpdateSessionSettingsResponse>;
    /** @deprecated use `UpdateSessionSettingsResponse$Outbound` instead. */
    type Outbound = UpdateSessionSettingsResponse$Outbound;
}
export declare function updateSessionSettingsResponseToJSON(updateSessionSettingsResponse: UpdateSessionSettingsResponse): string;
export declare function updateSessionSettingsResponseFromJSON(jsonString: string): SafeParseResult<UpdateSessionSettingsResponse, SDKValidationError>;
