import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpMicrosoftSettings, StepUpMicrosoftSettings$Outbound } from "./stepupmicrosoftsettings.js";
import { StepUpOAuth2Settings, StepUpOAuth2Settings$Outbound } from "./stepupoauth2settings.js";
/**
 * The StepUpProvider message.
 *
 * @remarks
 *
 * This message contains a oneof named settings. Only a single field of the following list may be set at a time:
 *   - oauth2
 *   - microsoft
 */
export type StepUpProvider = {
    /**
     * The clientId field.
     */
    clientId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    /**
     * The issuerUrl field.
     */
    issuerUrl?: string | null | undefined;
    lastTestedAt?: Date | null | undefined;
    microsoft?: StepUpMicrosoftSettings | null | undefined;
    oauth2?: StepUpOAuth2Settings | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const StepUpProvider$inboundSchema: z.ZodType<StepUpProvider, z.ZodTypeDef, unknown>;
/** @internal */
export type StepUpProvider$Outbound = {
    clientId?: string | null | undefined;
    createdAt?: string | null | undefined;
    displayName?: string | null | undefined;
    enabled?: boolean | null | undefined;
    id?: string | null | undefined;
    issuerUrl?: string | null | undefined;
    lastTestedAt?: string | null | undefined;
    microsoft?: StepUpMicrosoftSettings$Outbound | null | undefined;
    oauth2?: StepUpOAuth2Settings$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const StepUpProvider$outboundSchema: z.ZodType<StepUpProvider$Outbound, z.ZodTypeDef, StepUpProvider>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepUpProvider$ {
    /** @deprecated use `StepUpProvider$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepUpProvider, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepUpProvider$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepUpProvider$Outbound, z.ZodTypeDef, StepUpProvider>;
    /** @deprecated use `StepUpProvider$Outbound` instead. */
    type Outbound = StepUpProvider$Outbound;
}
export declare function stepUpProviderToJSON(stepUpProvider: StepUpProvider): string;
export declare function stepUpProviderFromJSON(jsonString: string): SafeParseResult<StepUpProvider, SDKValidationError>;
