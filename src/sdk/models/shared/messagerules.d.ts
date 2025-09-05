import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * MessageRules describe the constraints applied to embedded message values.
 *
 * @remarks
 *  For message-type fields, validation is performed recursively.
 */
export type MessageRules = {
    /**
     * Required specifies that this field must be set
     */
    required?: boolean | null | undefined;
    /**
     * Skip specifies that the validation rules of this field should not be
     *
     * @remarks
     *  evaluated
     */
    skip?: boolean | null | undefined;
};
/** @internal */
export declare const MessageRules$inboundSchema: z.ZodType<MessageRules, z.ZodTypeDef, unknown>;
/** @internal */
export type MessageRules$Outbound = {
    required?: boolean | null | undefined;
    skip?: boolean | null | undefined;
};
/** @internal */
export declare const MessageRules$outboundSchema: z.ZodType<MessageRules$Outbound, z.ZodTypeDef, MessageRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MessageRules$ {
    /** @deprecated use `MessageRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MessageRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `MessageRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MessageRules$Outbound, z.ZodTypeDef, MessageRules>;
    /** @deprecated use `MessageRules$Outbound` instead. */
    type Outbound = MessageRules$Outbound;
}
export declare function messageRulesToJSON(messageRules: MessageRules): string;
export declare function messageRulesFromJSON(jsonString: string): SafeParseResult<MessageRules, SDKValidationError>;
