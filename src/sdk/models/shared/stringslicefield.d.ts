import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ChipsField, ChipsField$Outbound } from "./chipsfield.js";
import { RepeatedRules, RepeatedRules$Outbound } from "./repeatedrules.js";
/**
 * The StringSliceField message.
 *
 * @remarks
 *
 * This message contains a oneof named view. Only a single field of the following list may be set at a time:
 *   - chipsField
 *
 * This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
 *   - rules
 */
export type StringSliceField = {
    chipsField?: ChipsField | null | undefined;
    /**
     * The defaultValues field.
     */
    defaultValues?: Array<string> | null | undefined;
    /**
     * The placeholder field.
     */
    placeholder?: string | null | undefined;
    rules?: RepeatedRules | null | undefined;
};
/** @internal */
export declare const StringSliceField$inboundSchema: z.ZodType<StringSliceField, z.ZodTypeDef, unknown>;
/** @internal */
export type StringSliceField$Outbound = {
    chipsField?: ChipsField$Outbound | null | undefined;
    defaultValues?: Array<string> | null | undefined;
    placeholder?: string | null | undefined;
    rules?: RepeatedRules$Outbound | null | undefined;
};
/** @internal */
export declare const StringSliceField$outboundSchema: z.ZodType<StringSliceField$Outbound, z.ZodTypeDef, StringSliceField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StringSliceField$ {
    /** @deprecated use `StringSliceField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StringSliceField, z.ZodTypeDef, unknown>;
    /** @deprecated use `StringSliceField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StringSliceField$Outbound, z.ZodTypeDef, StringSliceField>;
    /** @deprecated use `StringSliceField$Outbound` instead. */
    type Outbound = StringSliceField$Outbound;
}
export declare function stringSliceFieldToJSON(stringSliceField: StringSliceField): string;
export declare function stringSliceFieldFromJSON(jsonString: string): SafeParseResult<StringSliceField, SDKValidationError>;
