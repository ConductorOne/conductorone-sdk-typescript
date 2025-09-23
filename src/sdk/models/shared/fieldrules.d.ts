import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AnyRules, AnyRules$Outbound } from "./anyrules.js";
import { BoolRules, BoolRules$Outbound } from "./boolrules.js";
import { BytesRules, BytesRules$Outbound } from "./bytesrules.js";
import { DoubleRules, DoubleRules$Outbound } from "./doublerules.js";
import { DurationRules, DurationRules$Outbound } from "./durationrules.js";
import { EnumRules, EnumRules$Outbound } from "./enumrules.js";
import { Fixed32Rules, Fixed32Rules$Outbound } from "./fixed32rules.js";
import { Fixed64Rules, Fixed64Rules$Outbound } from "./fixed64rules.js";
import { FloatRules, FloatRules$Outbound } from "./floatrules.js";
import { Int32Rules, Int32Rules$Outbound } from "./int32rules.js";
import { Int64Rules, Int64Rules$Outbound } from "./int64rules.js";
import { MapRules, MapRules$Outbound } from "./maprules.js";
import { MessageRules, MessageRules$Outbound } from "./messagerules.js";
import { RepeatedRules, RepeatedRules$Outbound } from "./repeatedrules.js";
import { SFixed32Rules, SFixed32Rules$Outbound } from "./sfixed32rules.js";
import { SFixed64Rules, SFixed64Rules$Outbound } from "./sfixed64rules.js";
import { SInt32Rules, SInt32Rules$Outbound } from "./sint32rules.js";
import { SInt64Rules, SInt64Rules$Outbound } from "./sint64rules.js";
import { StringRules, StringRules$Outbound } from "./stringrules.js";
import { TimestampRules, TimestampRules$Outbound } from "./timestamprules.js";
import { UInt32Rules, UInt32Rules$Outbound } from "./uint32rules.js";
import { UInt64Rules, UInt64Rules$Outbound } from "./uint64rules.js";
/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 *
 * @remarks
 *  field, the correct set should be used to ensure proper validations.
 *
 * This message contains a oneof named type. Only a single field of the following list may be set at a time:
 *   - float
 *   - double
 *   - int32
 *   - int64
 *   - uint32
 *   - uint64
 *   - sint32
 *   - sint64
 *   - fixed32
 *   - fixed64
 *   - sfixed32
 *   - sfixed64
 *   - bool
 *   - string
 *   - bytes
 *   - enum
 *   - repeated
 *   - map
 *   - any
 *   - duration
 *   - timestamp
 */
export type FieldRules = {
    any?: AnyRules | null | undefined;
    bool?: BoolRules | null | undefined;
    bytes?: BytesRules | null | undefined;
    double?: DoubleRules | null | undefined;
    duration?: DurationRules | null | undefined;
    enum?: EnumRules | null | undefined;
    fixed32?: Fixed32Rules | null | undefined;
    fixed64?: Fixed64Rules | null | undefined;
    float?: FloatRules | null | undefined;
    int32?: Int32Rules | null | undefined;
    int64?: Int64Rules | null | undefined;
    map?: MapRules | null | undefined;
    message?: MessageRules | null | undefined;
    repeated?: RepeatedRules | null | undefined;
    sfixed32?: SFixed32Rules | null | undefined;
    sfixed64?: SFixed64Rules | null | undefined;
    sint32?: SInt32Rules | null | undefined;
    sint64?: SInt64Rules | null | undefined;
    string?: StringRules | null | undefined;
    timestamp?: TimestampRules | null | undefined;
    uint32?: UInt32Rules | null | undefined;
    uint64?: UInt64Rules | null | undefined;
};
/** @internal */
export declare const FieldRules$inboundSchema: z.ZodType<FieldRules, z.ZodTypeDef, unknown>;
/** @internal */
export type FieldRules$Outbound = {
    any?: AnyRules$Outbound | null | undefined;
    bool?: BoolRules$Outbound | null | undefined;
    bytes?: BytesRules$Outbound | null | undefined;
    double?: DoubleRules$Outbound | null | undefined;
    duration?: DurationRules$Outbound | null | undefined;
    enum?: EnumRules$Outbound | null | undefined;
    fixed32?: Fixed32Rules$Outbound | null | undefined;
    fixed64?: Fixed64Rules$Outbound | null | undefined;
    float?: FloatRules$Outbound | null | undefined;
    int32?: Int32Rules$Outbound | null | undefined;
    int64?: Int64Rules$Outbound | null | undefined;
    map?: MapRules$Outbound | null | undefined;
    message?: MessageRules$Outbound | null | undefined;
    repeated?: RepeatedRules$Outbound | null | undefined;
    sfixed32?: SFixed32Rules$Outbound | null | undefined;
    sfixed64?: SFixed64Rules$Outbound | null | undefined;
    sint32?: SInt32Rules$Outbound | null | undefined;
    sint64?: SInt64Rules$Outbound | null | undefined;
    string?: StringRules$Outbound | null | undefined;
    timestamp?: TimestampRules$Outbound | null | undefined;
    uint32?: UInt32Rules$Outbound | null | undefined;
    uint64?: UInt64Rules$Outbound | null | undefined;
};
/** @internal */
export declare const FieldRules$outboundSchema: z.ZodType<FieldRules$Outbound, z.ZodTypeDef, FieldRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FieldRules$ {
    /** @deprecated use `FieldRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FieldRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `FieldRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FieldRules$Outbound, z.ZodTypeDef, FieldRules>;
    /** @deprecated use `FieldRules$Outbound` instead. */
    type Outbound = FieldRules$Outbound;
}
export declare function fieldRulesToJSON(fieldRules: FieldRules): string;
export declare function fieldRulesFromJSON(jsonString: string): SafeParseResult<FieldRules, SDKValidationError>;
