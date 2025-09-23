import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PersonalClient, PersonalClient$Outbound } from "./personalclient.js";
/**
 * The PersonalClientServiceListResponse message.
 */
export type PersonalClientServiceListResponse = {
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
export declare const PersonalClientServiceListResponse$inboundSchema: z.ZodType<PersonalClientServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceListResponse$Outbound = {
    list?: Array<PersonalClient$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceListResponse$outboundSchema: z.ZodType<PersonalClientServiceListResponse$Outbound, z.ZodTypeDef, PersonalClientServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceListResponse$ {
    /** @deprecated use `PersonalClientServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceListResponse$Outbound, z.ZodTypeDef, PersonalClientServiceListResponse>;
    /** @deprecated use `PersonalClientServiceListResponse$Outbound` instead. */
    type Outbound = PersonalClientServiceListResponse$Outbound;
}
export declare function personalClientServiceListResponseToJSON(personalClientServiceListResponse: PersonalClientServiceListResponse): string;
export declare function personalClientServiceListResponseFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceListResponse, SDKValidationError>;
