import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UnconfiguredProvision message.
 */
export type UnconfiguredProvision = {};
/** @internal */
export declare const UnconfiguredProvision$inboundSchema: z.ZodType<UnconfiguredProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type UnconfiguredProvision$Outbound = {};
/** @internal */
export declare const UnconfiguredProvision$outboundSchema: z.ZodType<UnconfiguredProvision$Outbound, z.ZodTypeDef, UnconfiguredProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnconfiguredProvision$ {
    /** @deprecated use `UnconfiguredProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnconfiguredProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnconfiguredProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnconfiguredProvision$Outbound, z.ZodTypeDef, UnconfiguredProvision>;
    /** @deprecated use `UnconfiguredProvision$Outbound` instead. */
    type Outbound = UnconfiguredProvision$Outbound;
}
export declare function unconfiguredProvisionToJSON(unconfiguredProvision: UnconfiguredProvision): string;
export declare function unconfiguredProvisionFromJSON(jsonString: string): SafeParseResult<UnconfiguredProvision, SDKValidationError>;
