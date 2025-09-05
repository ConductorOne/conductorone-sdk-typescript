import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PersonalClient, PersonalClient$Outbound } from "./personalclient.js";
/**
 * The PersonalClientSearchServiceSearchResponse message.
 */
export type PersonalClientSearchServiceSearchResponse = {
    /**
     * The list field.
     */
    list?: Array<PersonalClient> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientSearchServiceSearchResponse$inboundSchema: z.ZodType<PersonalClientSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientSearchServiceSearchResponse$Outbound = {
    list?: Array<PersonalClient$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientSearchServiceSearchResponse$outboundSchema: z.ZodType<PersonalClientSearchServiceSearchResponse$Outbound, z.ZodTypeDef, PersonalClientSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientSearchServiceSearchResponse$ {
    /** @deprecated use `PersonalClientSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientSearchServiceSearchResponse$Outbound, z.ZodTypeDef, PersonalClientSearchServiceSearchResponse>;
    /** @deprecated use `PersonalClientSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = PersonalClientSearchServiceSearchResponse$Outbound;
}
export declare function personalClientSearchServiceSearchResponseToJSON(personalClientSearchServiceSearchResponse: PersonalClientSearchServiceSearchResponse): string;
export declare function personalClientSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<PersonalClientSearchServiceSearchResponse, SDKValidationError>;
