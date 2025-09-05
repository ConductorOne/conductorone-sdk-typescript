import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FormCompletedAction, FormCompletedAction$Outbound } from "./formcompletedaction.js";
import { FormInput, FormInput$Outbound } from "./forminput.js";
import { ReassignedAction, ReassignedAction$Outbound } from "./reassignedaction.js";
import { RestartAction, RestartAction$Outbound } from "./restartaction.js";
import { SkippedAction, SkippedAction$Outbound } from "./skippedaction.js";
/**
 * The state field.
 */
export declare const FormInstanceState: {
    readonly FormInstanceStateUnspecified: "FORM_INSTANCE_STATE_UNSPECIFIED";
    readonly FormInstanceStateWaiting: "FORM_INSTANCE_STATE_WAITING";
    readonly FormInstanceStateDone: "FORM_INSTANCE_STATE_DONE";
};
/**
 * The state field.
 */
export type FormInstanceState = OpenEnum<typeof FormInstanceState>;
/**
 * The FormInstance message.
 *
 * @remarks
 *
 * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
 *   - completed
 *   - restarted
 *   - reassigned
 *   - skipped
 */
export type FormInstance = {
    completed?: FormCompletedAction | null | undefined;
    data?: {
        [k: string]: any;
    } | null | undefined;
    form?: FormInput | null | undefined;
    reassigned?: ReassignedAction | null | undefined;
    restarted?: RestartAction | null | undefined;
    skipped?: SkippedAction | null | undefined;
    /**
     * The state field.
     */
    state?: FormInstanceState | null | undefined;
};
/** @internal */
export declare const FormInstanceState$inboundSchema: z.ZodType<FormInstanceState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FormInstanceState$outboundSchema: z.ZodType<FormInstanceState, z.ZodTypeDef, FormInstanceState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormInstanceState$ {
    /** @deprecated use `FormInstanceState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormInstanceState, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormInstanceState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormInstanceState, z.ZodTypeDef, FormInstanceState>;
}
/** @internal */
export declare const FormInstance$inboundSchema: z.ZodType<FormInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type FormInstance$Outbound = {
    completed?: FormCompletedAction$Outbound | null | undefined;
    data?: {
        [k: string]: any;
    } | null | undefined;
    form?: FormInput$Outbound | null | undefined;
    reassigned?: ReassignedAction$Outbound | null | undefined;
    restarted?: RestartAction$Outbound | null | undefined;
    skipped?: SkippedAction$Outbound | null | undefined;
    state?: string | null | undefined;
};
/** @internal */
export declare const FormInstance$outboundSchema: z.ZodType<FormInstance$Outbound, z.ZodTypeDef, FormInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormInstance$ {
    /** @deprecated use `FormInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormInstance$Outbound, z.ZodTypeDef, FormInstance>;
    /** @deprecated use `FormInstance$Outbound` instead. */
    type Outbound = FormInstance$Outbound;
}
export declare function formInstanceToJSON(formInstance: FormInstance): string;
export declare function formInstanceFromJSON(jsonString: string): SafeParseResult<FormInstance, SDKValidationError>;
