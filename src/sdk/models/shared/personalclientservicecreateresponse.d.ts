import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PersonalClient, PersonalClient$Outbound } from "./personalclient.js";
/**
 * The PersonalClientServiceCreateResponse message contains the created personal client and client secret.
 */
export type PersonalClientServiceCreateResponse = {
    client?: PersonalClient | null | undefined;
    /**
     * The client secret that corresponds to the personal client. Make sure to save this, because it cannot be returned or queried again.
     */
    clientSecret?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceCreateResponse$inboundSchema: z.ZodType<PersonalClientServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceCreateResponse$Outbound = {
    client?: PersonalClient$Outbound | null | undefined;
    clientSecret?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceCreateResponse$outboundSchema: z.ZodType<PersonalClientServiceCreateResponse$Outbound, z.ZodTypeDef, PersonalClientServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceCreateResponse$ {
    /** @deprecated use `PersonalClientServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceCreateResponse$Outbound, z.ZodTypeDef, PersonalClientServiceCreateResponse>;
    /** @deprecated use `PersonalClientServiceCreateResponse$Outbound` instead. */
    type Outbound = PersonalClientServiceCreateResponse$Outbound;
}
export declare function personalClientServiceCreateResponseToJSON(personalClientServiceCreateResponse: PersonalClientServiceCreateResponse): string;
export declare function personalClientServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceCreateResponse, SDKValidationError>;
