import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { SessionSettings, SessionSettings$Outbound } from "./sessionsettings.js";
/**
 * The GetSessionSettingsResponse message.
 */
export type GetSessionSettingsResponse = {
    sessionSettings?: SessionSettings | null | undefined;
};
/** @internal */
export declare const GetSessionSettingsResponse$inboundSchema: z.ZodType<GetSessionSettingsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSessionSettingsResponse$Outbound = {
    sessionSettings?: SessionSettings$Outbound | null | undefined;
};
/** @internal */
export declare const GetSessionSettingsResponse$outboundSchema: z.ZodType<GetSessionSettingsResponse$Outbound, z.ZodTypeDef, GetSessionSettingsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetSessionSettingsResponse$ {
    /** @deprecated use `GetSessionSettingsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetSessionSettingsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetSessionSettingsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetSessionSettingsResponse$Outbound, z.ZodTypeDef, GetSessionSettingsResponse>;
    /** @deprecated use `GetSessionSettingsResponse$Outbound` instead. */
    type Outbound = GetSessionSettingsResponse$Outbound;
}
export declare function getSessionSettingsResponseToJSON(getSessionSettingsResponse: GetSessionSettingsResponse): string;
export declare function getSessionSettingsResponseFromJSON(jsonString: string): SafeParseResult<GetSessionSettingsResponse, SDKValidationError>;
