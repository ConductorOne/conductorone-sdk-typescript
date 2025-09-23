import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome of a provision instance that has errored.
 */
export type ErroredAction = {
    /**
     * The description of a provision instance that has errored.
     */
    description?: string | null | undefined;
    /**
     * The error code of a provision instance that has errored. This is only PEC-1 for now, but more will be added in the future.
     */
    errorCode?: string | null | undefined;
    erroredAt?: Date | null | undefined;
};
/** @internal */
export declare const ErroredAction$inboundSchema: z.ZodType<ErroredAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ErroredAction$Outbound = {
    description?: string | null | undefined;
    errorCode?: string | null | undefined;
    erroredAt?: string | null | undefined;
};
/** @internal */
export declare const ErroredAction$outboundSchema: z.ZodType<ErroredAction$Outbound, z.ZodTypeDef, ErroredAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ErroredAction$ {
    /** @deprecated use `ErroredAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ErroredAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ErroredAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ErroredAction$Outbound, z.ZodTypeDef, ErroredAction>;
    /** @deprecated use `ErroredAction$Outbound` instead. */
    type Outbound = ErroredAction$Outbound;
}
export declare function erroredActionToJSON(erroredAction: ErroredAction): string;
export declare function erroredActionFromJSON(jsonString: string): SafeParseResult<ErroredAction, SDKValidationError>;
