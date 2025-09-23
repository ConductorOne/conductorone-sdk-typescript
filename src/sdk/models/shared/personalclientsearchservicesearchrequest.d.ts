import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The PersonalClientSearchServiceSearchRequest message.
 */
export type PersonalClientSearchServiceSearchRequest = {
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
    /**
     * The users field.
     */
    users?: Array<UserRef> | null | undefined;
};
/** @internal */
export declare const PersonalClientSearchServiceSearchRequest$inboundSchema: z.ZodType<PersonalClientSearchServiceSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientSearchServiceSearchRequest$Outbound = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    users?: Array<UserRef$Outbound> | null | undefined;
};
/** @internal */
export declare const PersonalClientSearchServiceSearchRequest$outboundSchema: z.ZodType<PersonalClientSearchServiceSearchRequest$Outbound, z.ZodTypeDef, PersonalClientSearchServiceSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientSearchServiceSearchRequest$ {
    /** @deprecated use `PersonalClientSearchServiceSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientSearchServiceSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientSearchServiceSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientSearchServiceSearchRequest$Outbound, z.ZodTypeDef, PersonalClientSearchServiceSearchRequest>;
    /** @deprecated use `PersonalClientSearchServiceSearchRequest$Outbound` instead. */
    type Outbound = PersonalClientSearchServiceSearchRequest$Outbound;
}
export declare function personalClientSearchServiceSearchRequestToJSON(personalClientSearchServiceSearchRequest: PersonalClientSearchServiceSearchRequest): string;
export declare function personalClientSearchServiceSearchRequestFromJSON(jsonString: string): SafeParseResult<PersonalClientSearchServiceSearchRequest, SDKValidationError>;
