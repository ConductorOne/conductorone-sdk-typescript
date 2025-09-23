import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { SessionSettings, SessionSettings$Outbound } from "./sessionsettings.js";
/**
 * The UpdateSessionSettingsRequest message.
 */
export type UpdateSessionSettingsRequest = {
    sessionSettings?: SessionSettings | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateSessionSettingsRequest$inboundSchema: z.ZodType<UpdateSessionSettingsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSessionSettingsRequest$Outbound = {
    sessionSettings?: SessionSettings$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateSessionSettingsRequest$outboundSchema: z.ZodType<UpdateSessionSettingsRequest$Outbound, z.ZodTypeDef, UpdateSessionSettingsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSessionSettingsRequest$ {
    /** @deprecated use `UpdateSessionSettingsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSessionSettingsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSessionSettingsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSessionSettingsRequest$Outbound, z.ZodTypeDef, UpdateSessionSettingsRequest>;
    /** @deprecated use `UpdateSessionSettingsRequest$Outbound` instead. */
    type Outbound = UpdateSessionSettingsRequest$Outbound;
}
export declare function updateSessionSettingsRequestToJSON(updateSessionSettingsRequest: UpdateSessionSettingsRequest): string;
export declare function updateSessionSettingsRequestFromJSON(jsonString: string): SafeParseResult<UpdateSessionSettingsRequest, SDKValidationError>;
