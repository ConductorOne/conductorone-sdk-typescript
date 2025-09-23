import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Field, Field$Outbound } from "./field.js";
import { FieldRelationship, FieldRelationship$Outbound } from "./fieldrelationship.js";
/**
 * A form is a collection of fields to be filled out by a user
 */
export type FormInput = {
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The fieldRelationships field.
     */
    fieldRelationships?: Array<FieldRelationship> | null | undefined;
    /**
     * The fields field.
     */
    fields?: Array<Field> | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const FormInput$inboundSchema: z.ZodType<FormInput, z.ZodTypeDef, unknown>;
/** @internal */
export type FormInput$Outbound = {
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    fieldRelationships?: Array<FieldRelationship$Outbound> | null | undefined;
    fields?: Array<Field$Outbound> | null | undefined;
    id?: string | null | undefined;
};
/** @internal */
export declare const FormInput$outboundSchema: z.ZodType<FormInput$Outbound, z.ZodTypeDef, FormInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormInput$ {
    /** @deprecated use `FormInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormInput$Outbound, z.ZodTypeDef, FormInput>;
    /** @deprecated use `FormInput$Outbound` instead. */
    type Outbound = FormInput$Outbound;
}
export declare function formInputToJSON(formInput: FormInput): string;
export declare function formInputFromJSON(jsonString: string): SafeParseResult<FormInput, SDKValidationError>;
