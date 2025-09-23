import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PayloadTest message.
 */
export type PayloadTest = {};
/** @internal */
export declare const PayloadTest$inboundSchema: z.ZodType<PayloadTest, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadTest$Outbound = {};
/** @internal */
export declare const PayloadTest$outboundSchema: z.ZodType<PayloadTest$Outbound, z.ZodTypeDef, PayloadTest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadTest$ {
    /** @deprecated use `PayloadTest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadTest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadTest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadTest$Outbound, z.ZodTypeDef, PayloadTest>;
    /** @deprecated use `PayloadTest$Outbound` instead. */
    type Outbound = PayloadTest$Outbound;
}
export declare function payloadTestToJSON(payloadTest: PayloadTest): string;
export declare function payloadTestFromJSON(jsonString: string): SafeParseResult<PayloadTest, SDKValidationError>;
