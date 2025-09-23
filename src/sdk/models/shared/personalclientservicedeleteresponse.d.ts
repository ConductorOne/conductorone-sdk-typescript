import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PersonalClientServiceDeleteResponse message.
 */
export type PersonalClientServiceDeleteResponse = {};
/** @internal */
export declare const PersonalClientServiceDeleteResponse$inboundSchema: z.ZodType<PersonalClientServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceDeleteResponse$Outbound = {};
/** @internal */
export declare const PersonalClientServiceDeleteResponse$outboundSchema: z.ZodType<PersonalClientServiceDeleteResponse$Outbound, z.ZodTypeDef, PersonalClientServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceDeleteResponse$ {
    /** @deprecated use `PersonalClientServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceDeleteResponse$Outbound, z.ZodTypeDef, PersonalClientServiceDeleteResponse>;
    /** @deprecated use `PersonalClientServiceDeleteResponse$Outbound` instead. */
    type Outbound = PersonalClientServiceDeleteResponse$Outbound;
}
export declare function personalClientServiceDeleteResponseToJSON(personalClientServiceDeleteResponse: PersonalClientServiceDeleteResponse): string;
export declare function personalClientServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceDeleteResponse, SDKValidationError>;
