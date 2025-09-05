import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FieldRules, FieldRules$Outbound } from "./fieldrules.js";
/**
 * MapRules describe the constraints applied to `map` values
 */
export type MapRules = {
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     *
     * @remarks
     *  evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | null | undefined;
    keys?: FieldRules | null | undefined;
    /**
     * MaxPairs specifies that this field must have the specified number of
     *
     * @remarks
     *  KVs at a maximum
     */
    maxPairs?: string | null | undefined;
    /**
     * MinPairs specifies that this field must have the specified number of
     *
     * @remarks
     *  KVs at a minimum
     */
    minPairs?: string | null | undefined;
    /**
     * NoSparse specifies values in this field cannot be unset. This only
     *
     * @remarks
     *  applies to map's with message value types.
     */
    noSparse?: boolean | null | undefined;
    values?: FieldRules | null | undefined;
};
/** @internal */
export declare const MapRules$inboundSchema: z.ZodType<MapRules, z.ZodTypeDef, unknown>;
/** @internal */
export type MapRules$Outbound = {
    ignoreEmpty?: boolean | null | undefined;
    keys?: FieldRules$Outbound | null | undefined;
    maxPairs?: string | null | undefined;
    minPairs?: string | null | undefined;
    noSparse?: boolean | null | undefined;
    values?: FieldRules$Outbound | null | undefined;
};
/** @internal */
export declare const MapRules$outboundSchema: z.ZodType<MapRules$Outbound, z.ZodTypeDef, MapRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MapRules$ {
    /** @deprecated use `MapRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MapRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `MapRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MapRules$Outbound, z.ZodTypeDef, MapRules>;
    /** @deprecated use `MapRules$Outbound` instead. */
    type Outbound = MapRules$Outbound;
}
export declare function mapRulesToJSON(mapRules: MapRules): string;
export declare function mapRulesFromJSON(jsonString: string): SafeParseResult<MapRules, SDKValidationError>;
