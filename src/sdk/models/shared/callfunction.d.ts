import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CallFunction message.
 */
export type CallFunction = {
    /**
     * The args field.
     */
    args?: {
        [k: string]: string;
    } | null | undefined;
    /**
     * The functionId field.
     */
    functionId?: string | null | undefined;
};
/** @internal */
export declare const CallFunction$inboundSchema: z.ZodType<CallFunction, z.ZodTypeDef, unknown>;
/** @internal */
export type CallFunction$Outbound = {
    args?: {
        [k: string]: string;
    } | null | undefined;
    functionId?: string | null | undefined;
};
/** @internal */
export declare const CallFunction$outboundSchema: z.ZodType<CallFunction$Outbound, z.ZodTypeDef, CallFunction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CallFunction$ {
    /** @deprecated use `CallFunction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CallFunction, z.ZodTypeDef, unknown>;
    /** @deprecated use `CallFunction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CallFunction$Outbound, z.ZodTypeDef, CallFunction>;
    /** @deprecated use `CallFunction$Outbound` instead. */
    type Outbound = CallFunction$Outbound;
}
export declare function callFunctionToJSON(callFunction: CallFunction): string;
export declare function callFunctionFromJSON(jsonString: string): SafeParseResult<CallFunction, SDKValidationError>;
