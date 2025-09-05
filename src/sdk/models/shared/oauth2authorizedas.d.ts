import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * OAuth2AuthorizedAs tracks the user that OAuthed with the connector.
 */
export type OAuth2AuthorizedAs = {
    /**
     * authEmail is the email of the user that authorized the connector using OAuth.
     */
    authEmail?: string | null | undefined;
    authorizedAt?: Date | null | undefined;
};
/** @internal */
export declare const OAuth2AuthorizedAs$inboundSchema: z.ZodType<OAuth2AuthorizedAs, z.ZodTypeDef, unknown>;
/** @internal */
export type OAuth2AuthorizedAs$Outbound = {
    authEmail?: string | null | undefined;
    authorizedAt?: string | null | undefined;
};
/** @internal */
export declare const OAuth2AuthorizedAs$outboundSchema: z.ZodType<OAuth2AuthorizedAs$Outbound, z.ZodTypeDef, OAuth2AuthorizedAs>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OAuth2AuthorizedAs$ {
    /** @deprecated use `OAuth2AuthorizedAs$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OAuth2AuthorizedAs, z.ZodTypeDef, unknown>;
    /** @deprecated use `OAuth2AuthorizedAs$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OAuth2AuthorizedAs$Outbound, z.ZodTypeDef, OAuth2AuthorizedAs>;
    /** @deprecated use `OAuth2AuthorizedAs$Outbound` instead. */
    type Outbound = OAuth2AuthorizedAs$Outbound;
}
export declare function oAuth2AuthorizedAsToJSON(oAuth2AuthorizedAs: OAuth2AuthorizedAs): string;
export declare function oAuth2AuthorizedAsFromJSON(jsonString: string): SafeParseResult<OAuth2AuthorizedAs, SDKValidationError>;
