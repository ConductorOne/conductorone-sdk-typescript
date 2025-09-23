import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CIDRRestriction, CIDRRestriction$Outbound } from "./cidrrestriction.js";
/**
 * The SessionSettings message.
 */
export type SessionSettings = {
    connectorSource?: CIDRRestriction | null | undefined;
    maxSessionLength?: string | null | undefined;
    pccAdminSource?: CIDRRestriction | null | undefined;
    pccUserSource?: CIDRRestriction | null | undefined;
    ssoAdminSource?: CIDRRestriction | null | undefined;
    ssoUserSource?: CIDRRestriction | null | undefined;
};
/** @internal */
export declare const SessionSettings$inboundSchema: z.ZodType<SessionSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type SessionSettings$Outbound = {
    connectorSource?: CIDRRestriction$Outbound | null | undefined;
    maxSessionLength?: string | null | undefined;
    pccAdminSource?: CIDRRestriction$Outbound | null | undefined;
    pccUserSource?: CIDRRestriction$Outbound | null | undefined;
    ssoAdminSource?: CIDRRestriction$Outbound | null | undefined;
    ssoUserSource?: CIDRRestriction$Outbound | null | undefined;
};
/** @internal */
export declare const SessionSettings$outboundSchema: z.ZodType<SessionSettings$Outbound, z.ZodTypeDef, SessionSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SessionSettings$ {
    /** @deprecated use `SessionSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SessionSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `SessionSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SessionSettings$Outbound, z.ZodTypeDef, SessionSettings>;
    /** @deprecated use `SessionSettings$Outbound` instead. */
    type Outbound = SessionSettings$Outbound;
}
export declare function sessionSettingsToJSON(sessionSettings: SessionSettings): string;
export declare function sessionSettingsFromJSON(jsonString: string): SafeParseResult<SessionSettings, SDKValidationError>;
