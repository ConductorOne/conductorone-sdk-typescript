import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The SendEmail message.
 */
export type SendEmail = {
    /**
     * The body field.
     */
    body?: string | null | undefined;
    /**
     * The subject field.
     */
    subject?: string | null | undefined;
    /**
     * The title field.
     */
    title?: string | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdsCel field.
     */
    userIdsCel?: string | null | undefined;
    /**
     * The userRefs field.
     */
    userRefs?: Array<UserRef> | null | undefined;
};
/** @internal */
export declare const SendEmail$inboundSchema: z.ZodType<SendEmail, z.ZodTypeDef, unknown>;
/** @internal */
export type SendEmail$Outbound = {
    body?: string | null | undefined;
    subject?: string | null | undefined;
    title?: string | null | undefined;
    useSubjectUser?: boolean | null | undefined;
    userIdsCel?: string | null | undefined;
    userRefs?: Array<UserRef$Outbound> | null | undefined;
};
/** @internal */
export declare const SendEmail$outboundSchema: z.ZodType<SendEmail$Outbound, z.ZodTypeDef, SendEmail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SendEmail$ {
    /** @deprecated use `SendEmail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SendEmail, z.ZodTypeDef, unknown>;
    /** @deprecated use `SendEmail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SendEmail$Outbound, z.ZodTypeDef, SendEmail>;
    /** @deprecated use `SendEmail$Outbound` instead. */
    type Outbound = SendEmail$Outbound;
}
export declare function sendEmailToJSON(sendEmail: SendEmail): string;
export declare function sendEmailFromJSON(jsonString: string): SafeParseResult<SendEmail, SDKValidationError>;
