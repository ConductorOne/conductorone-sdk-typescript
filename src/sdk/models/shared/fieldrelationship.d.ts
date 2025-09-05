import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AtLeastOne, AtLeastOne$Outbound } from "./atleastone.js";
import { MutuallyExclusive, MutuallyExclusive$Outbound } from "./mutuallyexclusive.js";
import { RequiredTogether, RequiredTogether$Outbound } from "./requiredtogether.js";
/**
 * FieldRelationships can be used during form validation, or they can represent
 *
 * @remarks
 *  information that is necessary to when it comes to visually rendering the form
 *
 * This message contains a oneof named kind. Only a single field of the following list may be set at a time:
 *   - requiredTogether
 *   - atLeastOne
 *   - mutuallyExclusive
 */
export type FieldRelationship = {
    atLeastOne?: AtLeastOne | null | undefined;
    /**
     * The names of the fields that share this relationship
     */
    fieldNames?: Array<string> | null | undefined;
    mutuallyExclusive?: MutuallyExclusive | null | undefined;
    requiredTogether?: RequiredTogether | null | undefined;
};
/** @internal */
export declare const FieldRelationship$inboundSchema: z.ZodType<FieldRelationship, z.ZodTypeDef, unknown>;
/** @internal */
export type FieldRelationship$Outbound = {
    atLeastOne?: AtLeastOne$Outbound | null | undefined;
    fieldNames?: Array<string> | null | undefined;
    mutuallyExclusive?: MutuallyExclusive$Outbound | null | undefined;
    requiredTogether?: RequiredTogether$Outbound | null | undefined;
};
/** @internal */
export declare const FieldRelationship$outboundSchema: z.ZodType<FieldRelationship$Outbound, z.ZodTypeDef, FieldRelationship>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FieldRelationship$ {
    /** @deprecated use `FieldRelationship$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FieldRelationship, z.ZodTypeDef, unknown>;
    /** @deprecated use `FieldRelationship$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FieldRelationship$Outbound, z.ZodTypeDef, FieldRelationship>;
    /** @deprecated use `FieldRelationship$Outbound` instead. */
    type Outbound = FieldRelationship$Outbound;
}
export declare function fieldRelationshipToJSON(fieldRelationship: FieldRelationship): string;
export declare function fieldRelationshipFromJSON(jsonString: string): SafeParseResult<FieldRelationship, SDKValidationError>;
