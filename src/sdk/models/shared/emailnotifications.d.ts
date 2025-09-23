import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The EmailNotifications message.
 */
export type EmailNotifications = {
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    /**
     * The identityUserIds field.
     */
    identityUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const EmailNotifications$inboundSchema: z.ZodType<EmailNotifications, z.ZodTypeDef, unknown>;
/** @internal */
export type EmailNotifications$Outbound = {
    enabled?: boolean | null | undefined;
    identityUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const EmailNotifications$outboundSchema: z.ZodType<EmailNotifications$Outbound, z.ZodTypeDef, EmailNotifications>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmailNotifications$ {
    /** @deprecated use `EmailNotifications$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmailNotifications, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmailNotifications$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmailNotifications$Outbound, z.ZodTypeDef, EmailNotifications>;
    /** @deprecated use `EmailNotifications$Outbound` instead. */
    type Outbound = EmailNotifications$Outbound;
}
export declare function emailNotificationsToJSON(emailNotifications: EmailNotifications): string;
export declare function emailNotificationsFromJSON(jsonString: string): SafeParseResult<EmailNotifications, SDKValidationError>;
