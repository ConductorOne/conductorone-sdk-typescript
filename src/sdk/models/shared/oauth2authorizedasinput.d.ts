import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * OAuth2AuthorizedAs tracks the user that OAuthed with the connector.
 */
export type OAuth2AuthorizedAsInput = {
    authorizedAt?: Date | null | undefined;
};
/** @internal */
export declare const OAuth2AuthorizedAsInput$inboundSchema: z.ZodType<OAuth2AuthorizedAsInput, z.ZodTypeDef, unknown>;
/** @internal */
export type OAuth2AuthorizedAsInput$Outbound = {
    authorizedAt?: string | null | undefined;
};
/** @internal */
export declare const OAuth2AuthorizedAsInput$outboundSchema: z.ZodType<OAuth2AuthorizedAsInput$Outbound, z.ZodTypeDef, OAuth2AuthorizedAsInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OAuth2AuthorizedAsInput$ {
    /** @deprecated use `OAuth2AuthorizedAsInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OAuth2AuthorizedAsInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `OAuth2AuthorizedAsInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OAuth2AuthorizedAsInput$Outbound, z.ZodTypeDef, OAuth2AuthorizedAsInput>;
    /** @deprecated use `OAuth2AuthorizedAsInput$Outbound` instead. */
    type Outbound = OAuth2AuthorizedAsInput$Outbound;
}
export declare function oAuth2AuthorizedAsInputToJSON(oAuth2AuthorizedAsInput: OAuth2AuthorizedAsInput): string;
export declare function oAuth2AuthorizedAsInputFromJSON(jsonString: string): SafeParseResult<OAuth2AuthorizedAsInput, SDKValidationError>;
