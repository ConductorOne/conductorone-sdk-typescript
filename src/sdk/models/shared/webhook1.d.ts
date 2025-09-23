import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The Webhook message.
 */
export type Webhook1 = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The url field.
     */
    url?: string | null | undefined;
};
/** @internal */
export declare const Webhook1$inboundSchema: z.ZodType<Webhook1, z.ZodTypeDef, unknown>;
/** @internal */
export type Webhook1$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    id?: string | null | undefined;
    updatedAt?: string | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const Webhook1$outboundSchema: z.ZodType<Webhook1$Outbound, z.ZodTypeDef, Webhook1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Webhook1$ {
    /** @deprecated use `Webhook1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Webhook1, z.ZodTypeDef, unknown>;
    /** @deprecated use `Webhook1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Webhook1$Outbound, z.ZodTypeDef, Webhook1>;
    /** @deprecated use `Webhook1$Outbound` instead. */
    type Outbound = Webhook1$Outbound;
}
export declare function webhook1ToJSON(webhook1: Webhook1): string;
export declare function webhook1FromJSON(jsonString: string): SafeParseResult<Webhook1, SDKValidationError>;
