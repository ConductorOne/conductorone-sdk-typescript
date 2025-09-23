import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ScheduleTrigger message.
 */
export type ScheduleTrigger = {
    /**
     * The advanced field.
     */
    advanced?: boolean | null | undefined;
    /**
     * The cronSpec field.
     */
    cronSpec?: string | null | undefined;
    /**
     * The skipIfTrueCel field.
     */
    skipIfTrueCel?: string | null | undefined;
    start?: Date | null | undefined;
};
/** @internal */
export declare const ScheduleTrigger$inboundSchema: z.ZodType<ScheduleTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type ScheduleTrigger$Outbound = {
    advanced?: boolean | null | undefined;
    cronSpec?: string | null | undefined;
    skipIfTrueCel?: string | null | undefined;
    start?: string | null | undefined;
};
/** @internal */
export declare const ScheduleTrigger$outboundSchema: z.ZodType<ScheduleTrigger$Outbound, z.ZodTypeDef, ScheduleTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ScheduleTrigger$ {
    /** @deprecated use `ScheduleTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ScheduleTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `ScheduleTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ScheduleTrigger$Outbound, z.ZodTypeDef, ScheduleTrigger>;
    /** @deprecated use `ScheduleTrigger$Outbound` instead. */
    type Outbound = ScheduleTrigger$Outbound;
}
export declare function scheduleTriggerToJSON(scheduleTrigger: ScheduleTrigger): string;
export declare function scheduleTriggerFromJSON(jsonString: string): SafeParseResult<ScheduleTrigger, SDKValidationError>;
