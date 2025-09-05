import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * StepUpOAuth2Settings repersents an OAuth2 provider that supports RFC 9470 <https://www.rfc-editor.org/rfc/rfc9470>
 *
 * @remarks
 *
 *  Common ACR values for OAuth2 providers include:
 *    - "urn:okta:loa:1fa:any" (okta)
 *    - "urn:okta:loa:1fa:pwd" (okta)
 *    - "urn:okta:loa:2fa:any" (okta)
 *    - "urn:okta:loa:2fa:any:ifpossible" (okta)
 *    - "phr" (okta)
 *    - "phrh" (okta)
 */
export type StepUpOAuth2Settings = {
    /**
     * The acrValues field.
     */
    acrValues?: Array<string> | null | undefined;
};
/** @internal */
export declare const StepUpOAuth2Settings$inboundSchema: z.ZodType<StepUpOAuth2Settings, z.ZodTypeDef, unknown>;
/** @internal */
export type StepUpOAuth2Settings$Outbound = {
    acrValues?: Array<string> | null | undefined;
};
/** @internal */
export declare const StepUpOAuth2Settings$outboundSchema: z.ZodType<StepUpOAuth2Settings$Outbound, z.ZodTypeDef, StepUpOAuth2Settings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepUpOAuth2Settings$ {
    /** @deprecated use `StepUpOAuth2Settings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepUpOAuth2Settings, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepUpOAuth2Settings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepUpOAuth2Settings$Outbound, z.ZodTypeDef, StepUpOAuth2Settings>;
    /** @deprecated use `StepUpOAuth2Settings$Outbound` instead. */
    type Outbound = StepUpOAuth2Settings$Outbound;
}
export declare function stepUpOAuth2SettingsToJSON(stepUpOAuth2Settings: StepUpOAuth2Settings): string;
export declare function stepUpOAuth2SettingsFromJSON(jsonString: string): SafeParseResult<StepUpOAuth2Settings, SDKValidationError>;
