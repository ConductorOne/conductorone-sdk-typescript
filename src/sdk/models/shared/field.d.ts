import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BoolField, BoolField$Outbound } from "./boolfield.js";
import { Int64Field, Int64Field$Outbound } from "./int64field.js";
import { StringField, StringField$Outbound } from "./stringfield.js";
import { StringSliceField, StringSliceField$Outbound } from "./stringslicefield.js";
/**
 * A field is a single input meant to collect a piece of data from a user
 *
 * @remarks
 *
 * This message contains a oneof named type. Only a single field of the following list may be set at a time:
 *   - stringField
 *   - boolField
 *   - stringSliceField
 *   - int64Field
 */
export type Field = {
    boolField?: BoolField | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    int64Field?: Int64Field | null | undefined;
    /**
     * The name field.
     */
    name?: string | null | undefined;
    stringField?: StringField | null | undefined;
    stringSliceField?: StringSliceField | null | undefined;
};
/** @internal */
export declare const Field$inboundSchema: z.ZodType<Field, z.ZodTypeDef, unknown>;
/** @internal */
export type Field$Outbound = {
    boolField?: BoolField$Outbound | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    int64Field?: Int64Field$Outbound | null | undefined;
    name?: string | null | undefined;
    stringField?: StringField$Outbound | null | undefined;
    stringSliceField?: StringSliceField$Outbound | null | undefined;
};
/** @internal */
export declare const Field$outboundSchema: z.ZodType<Field$Outbound, z.ZodTypeDef, Field>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Field$ {
    /** @deprecated use `Field$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Field, z.ZodTypeDef, unknown>;
    /** @deprecated use `Field$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Field$Outbound, z.ZodTypeDef, Field>;
    /** @deprecated use `Field$Outbound` instead. */
    type Outbound = Field$Outbound;
}
export declare function fieldToJSON(field: Field): string;
export declare function fieldFromJSON(jsonString: string): SafeParseResult<Field, SDKValidationError>;
