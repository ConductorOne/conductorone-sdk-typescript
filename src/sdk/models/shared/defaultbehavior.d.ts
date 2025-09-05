import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DefaultBehavior message.
 */
export type DefaultBehavior = {
    /**
     * this checks if the entitlement is enabled by provisioning in a specific connector
     *
     * @remarks
     *  this can happen automatically and doesn't need any extra info
     */
    connectorId?: string | null | undefined;
};
/** @internal */
export declare const DefaultBehavior$inboundSchema: z.ZodType<DefaultBehavior, z.ZodTypeDef, unknown>;
/** @internal */
export type DefaultBehavior$Outbound = {
    connectorId?: string | null | undefined;
};
/** @internal */
export declare const DefaultBehavior$outboundSchema: z.ZodType<DefaultBehavior$Outbound, z.ZodTypeDef, DefaultBehavior>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DefaultBehavior$ {
    /** @deprecated use `DefaultBehavior$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DefaultBehavior, z.ZodTypeDef, unknown>;
    /** @deprecated use `DefaultBehavior$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DefaultBehavior$Outbound, z.ZodTypeDef, DefaultBehavior>;
    /** @deprecated use `DefaultBehavior$Outbound` instead. */
    type Outbound = DefaultBehavior$Outbound;
}
export declare function defaultBehaviorToJSON(defaultBehavior: DefaultBehavior): string;
export declare function defaultBehaviorFromJSON(jsonString: string): SafeParseResult<DefaultBehavior, SDKValidationError>;
