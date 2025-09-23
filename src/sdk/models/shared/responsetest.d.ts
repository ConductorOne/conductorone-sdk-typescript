import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponseTest message.
 */
export type ResponseTest = {
    /**
     * version contains the constant value "v1". Future versions of the Webhook Response
     *
     * @remarks
     *  will use a different string.
     */
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponseTest$inboundSchema: z.ZodType<ResponseTest, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseTest$Outbound = {
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponseTest$outboundSchema: z.ZodType<ResponseTest$Outbound, z.ZodTypeDef, ResponseTest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponseTest$ {
    /** @deprecated use `ResponseTest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponseTest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponseTest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponseTest$Outbound, z.ZodTypeDef, ResponseTest>;
    /** @deprecated use `ResponseTest$Outbound` instead. */
    type Outbound = ResponseTest$Outbound;
}
export declare function responseTestToJSON(responseTest: ResponseTest): string;
export declare function responseTestFromJSON(jsonString: string): SafeParseResult<ResponseTest, SDKValidationError>;
