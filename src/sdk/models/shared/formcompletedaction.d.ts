import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FormCompletedAction message.
 */
export type FormCompletedAction = {
    completedAt?: Date | null | undefined;
    /**
     * The userId field.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const FormCompletedAction$inboundSchema: z.ZodType<FormCompletedAction, z.ZodTypeDef, unknown>;
/** @internal */
export type FormCompletedAction$Outbound = {
    completedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const FormCompletedAction$outboundSchema: z.ZodType<FormCompletedAction$Outbound, z.ZodTypeDef, FormCompletedAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormCompletedAction$ {
    /** @deprecated use `FormCompletedAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormCompletedAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormCompletedAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormCompletedAction$Outbound, z.ZodTypeDef, FormCompletedAction>;
    /** @deprecated use `FormCompletedAction$Outbound` instead. */
    type Outbound = FormCompletedAction$Outbound;
}
export declare function formCompletedActionToJSON(formCompletedAction: FormCompletedAction): string;
export declare function formCompletedActionFromJSON(jsonString: string): SafeParseResult<FormCompletedAction, SDKValidationError>;
