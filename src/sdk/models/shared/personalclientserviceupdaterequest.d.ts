import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PersonalClientInput, PersonalClientInput$Outbound } from "./personalclientinput.js";
/**
 * The PersonalClientServiceUpdateRequest message.
 */
export type PersonalClientServiceUpdateRequest = {
    client?: PersonalClientInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceUpdateRequest$inboundSchema: z.ZodType<PersonalClientServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientServiceUpdateRequest$Outbound = {
    client?: PersonalClientInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientServiceUpdateRequest$outboundSchema: z.ZodType<PersonalClientServiceUpdateRequest$Outbound, z.ZodTypeDef, PersonalClientServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientServiceUpdateRequest$ {
    /** @deprecated use `PersonalClientServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientServiceUpdateRequest$Outbound, z.ZodTypeDef, PersonalClientServiceUpdateRequest>;
    /** @deprecated use `PersonalClientServiceUpdateRequest$Outbound` instead. */
    type Outbound = PersonalClientServiceUpdateRequest$Outbound;
}
export declare function personalClientServiceUpdateRequestToJSON(personalClientServiceUpdateRequest: PersonalClientServiceUpdateRequest): string;
export declare function personalClientServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<PersonalClientServiceUpdateRequest, SDKValidationError>;
