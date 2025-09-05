import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PersonalClient, PersonalClient$Outbound } from "./personalclient.js";
/**
 * The PersonalClientServiceGetResponse message.
 */
export type PersonalClientServiceGetResponse = {
    client?: PersonalClient | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceGetResponse$inboundSchema: z.ZodType<PersonalClientServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceGetResponse$Outbound = {
    client?: PersonalClient$Outbound | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceGetResponse$outboundSchema: z.ZodType<PersonalClientServiceGetResponse$Outbound, z.ZodTypeDef, PersonalClientServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceGetResponse$ {
    /** @deprecated use `PersonalClientServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceGetResponse$Outbound, z.ZodTypeDef, PersonalClientServiceGetResponse>;
    /** @deprecated use `PersonalClientServiceGetResponse$Outbound` instead. */
    type Outbound = PersonalClientServiceGetResponse$Outbound;
}
export declare function personalClientServiceGetResponseToJSON(personalClientServiceGetResponse: PersonalClientServiceGetResponse): string;
export declare function personalClientServiceGetResponseFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceGetResponse, SDKValidationError>;
