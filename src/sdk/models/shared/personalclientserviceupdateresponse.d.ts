import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PersonalClient, PersonalClient$Outbound } from "./personalclient.js";
/**
 * The PersonalClientServiceUpdateResponse message.
 */
export type PersonalClientServiceUpdateResponse = {
    client?: PersonalClient | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceUpdateResponse$inboundSchema: z.ZodType<PersonalClientServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceUpdateResponse$Outbound = {
    client?: PersonalClient$Outbound | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceUpdateResponse$outboundSchema: z.ZodType<PersonalClientServiceUpdateResponse$Outbound, z.ZodTypeDef, PersonalClientServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceUpdateResponse$ {
    /** @deprecated use `PersonalClientServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceUpdateResponse$Outbound, z.ZodTypeDef, PersonalClientServiceUpdateResponse>;
    /** @deprecated use `PersonalClientServiceUpdateResponse$Outbound` instead. */
    type Outbound = PersonalClientServiceUpdateResponse$Outbound;
}
export declare function personalClientServiceUpdateResponseToJSON(personalClientServiceUpdateResponse: PersonalClientServiceUpdateResponse): string;
export declare function personalClientServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceUpdateResponse, SDKValidationError>;
