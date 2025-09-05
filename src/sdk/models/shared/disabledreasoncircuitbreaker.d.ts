import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DisabledReasonCircuitBreaker message.
 */
export type DisabledReasonCircuitBreaker = {};
/** @internal */
export declare const DisabledReasonCircuitBreaker$inboundSchema: z.ZodType<DisabledReasonCircuitBreaker, z.ZodTypeDef, unknown>;
/** @internal */
export type DisabledReasonCircuitBreaker$Outbound = {};
/** @internal */
export declare const DisabledReasonCircuitBreaker$outboundSchema: z.ZodType<DisabledReasonCircuitBreaker$Outbound, z.ZodTypeDef, DisabledReasonCircuitBreaker>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DisabledReasonCircuitBreaker$ {
    /** @deprecated use `DisabledReasonCircuitBreaker$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DisabledReasonCircuitBreaker, z.ZodTypeDef, unknown>;
    /** @deprecated use `DisabledReasonCircuitBreaker$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DisabledReasonCircuitBreaker$Outbound, z.ZodTypeDef, DisabledReasonCircuitBreaker>;
    /** @deprecated use `DisabledReasonCircuitBreaker$Outbound` instead. */
    type Outbound = DisabledReasonCircuitBreaker$Outbound;
}
export declare function disabledReasonCircuitBreakerToJSON(disabledReasonCircuitBreaker: DisabledReasonCircuitBreaker): string;
export declare function disabledReasonCircuitBreakerFromJSON(jsonString: string): SafeParseResult<DisabledReasonCircuitBreaker, SDKValidationError>;
