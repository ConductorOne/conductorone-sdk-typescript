import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PersonalClientServiceDeleteRequest message.
 */
export type PersonalClientServiceDeleteRequest = {};
/** @internal */
export declare const PersonalClientServiceDeleteRequest$inboundSchema: z.ZodType<PersonalClientServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceDeleteRequest$Outbound = {};
/** @internal */
export declare const PersonalClientServiceDeleteRequest$outboundSchema: z.ZodType<PersonalClientServiceDeleteRequest$Outbound, z.ZodTypeDef, PersonalClientServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceDeleteRequest$ {
    /** @deprecated use `PersonalClientServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceDeleteRequest$Outbound, z.ZodTypeDef, PersonalClientServiceDeleteRequest>;
    /** @deprecated use `PersonalClientServiceDeleteRequest$Outbound` instead. */
    type Outbound = PersonalClientServiceDeleteRequest$Outbound;
}
export declare function personalClientServiceDeleteRequestToJSON(personalClientServiceDeleteRequest: PersonalClientServiceDeleteRequest): string;
export declare function personalClientServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceDeleteRequest, SDKValidationError>;
