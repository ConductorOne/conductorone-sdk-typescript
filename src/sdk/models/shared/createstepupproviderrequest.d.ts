import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpMicrosoftSettings, StepUpMicrosoftSettings$Outbound } from "./stepupmicrosoftsettings.js";
import { StepUpOAuth2Settings, StepUpOAuth2Settings$Outbound } from "./stepupoauth2settings.js";
/**
 * The CreateStepUpProviderRequest message.
 *
 * @remarks
 *
 * This message contains a oneof named settings. Only a single field of the following list may be set at a time:
 *   - oauth2
 *   - microsoft
 */
export type CreateStepUpProviderRequest = {
    /**
     * The clientId field.
     */
    clientId?: string | null | undefined;
    /**
     * The clientSecret field.
     */
    clientSecret?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The issuerUrl field.
     */
    issuerUrl?: string | null | undefined;
    microsoft?: StepUpMicrosoftSettings | null | undefined;
    oauth2?: StepUpOAuth2Settings | null | undefined;
};
/** @internal */
export declare const CreateStepUpProviderRequest$inboundSchema: z.ZodType<CreateStepUpProviderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateStepUpProviderRequest$Outbound = {
    clientId?: string | null | undefined;
    clientSecret?: string | null | undefined;
    displayName?: string | null | undefined;
    issuerUrl?: string | null | undefined;
    microsoft?: StepUpMicrosoftSettings$Outbound | null | undefined;
    oauth2?: StepUpOAuth2Settings$Outbound | null | undefined;
};
/** @internal */
export declare const CreateStepUpProviderRequest$outboundSchema: z.ZodType<CreateStepUpProviderRequest$Outbound, z.ZodTypeDef, CreateStepUpProviderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateStepUpProviderRequest$ {
    /** @deprecated use `CreateStepUpProviderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateStepUpProviderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateStepUpProviderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateStepUpProviderRequest$Outbound, z.ZodTypeDef, CreateStepUpProviderRequest>;
    /** @deprecated use `CreateStepUpProviderRequest$Outbound` instead. */
    type Outbound = CreateStepUpProviderRequest$Outbound;
}
export declare function createStepUpProviderRequestToJSON(createStepUpProviderRequest: CreateStepUpProviderRequest): string;
export declare function createStepUpProviderRequestFromJSON(jsonString: string): SafeParseResult<CreateStepUpProviderRequest, SDKValidationError>;
