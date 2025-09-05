import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SendSlackMessage message.
 *
 * @remarks
 *
 * This message contains a oneof named channel. Only a single field of the following list may be set at a time:
 *   - channelName
 *   - channelNameCel
 */
export type SendSlackMessage = {
    /**
     * The body field.
     */
    body?: string | null | undefined;
    /**
     * The channelName field.
     *
     * @remarks
     * This field is part of the `channel` oneof.
     * See the documentation for `c1.api.automations.v1.SendSlackMessage` for more details.
     */
    channelName?: string | null | undefined;
    /**
     * The channelNameCel field.
     *
     * @remarks
     * This field is part of the `channel` oneof.
     * See the documentation for `c1.api.automations.v1.SendSlackMessage` for more details.
     */
    channelNameCel?: string | null | undefined;
};
/** @internal */
export declare const SendSlackMessage$inboundSchema: z.ZodType<SendSlackMessage, z.ZodTypeDef, unknown>;
/** @internal */
export type SendSlackMessage$Outbound = {
    body?: string | null | undefined;
    channelName?: string | null | undefined;
    channelNameCel?: string | null | undefined;
};
/** @internal */
export declare const SendSlackMessage$outboundSchema: z.ZodType<SendSlackMessage$Outbound, z.ZodTypeDef, SendSlackMessage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SendSlackMessage$ {
    /** @deprecated use `SendSlackMessage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SendSlackMessage, z.ZodTypeDef, unknown>;
    /** @deprecated use `SendSlackMessage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SendSlackMessage$Outbound, z.ZodTypeDef, SendSlackMessage>;
    /** @deprecated use `SendSlackMessage$Outbound` instead. */
    type Outbound = SendSlackMessage$Outbound;
}
export declare function sendSlackMessageToJSON(sendSlackMessage: SendSlackMessage): string;
export declare function sendSlackMessageFromJSON(jsonString: string): SafeParseResult<SendSlackMessage, SDKValidationError>;
