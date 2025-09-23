import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * AttributeValue is the value of an attribute of a defined type.
 */
export type AttributeValue = {
    /**
     * The ID of the AttributeType that this AttributeValue belongs to.
     */
    attributeTypeId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The ID of the AttributeValue.
     */
    id?: string | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The value of the AttributeValue. This is the string that will be displayed to the user.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const AttributeValue$inboundSchema: z.ZodType<AttributeValue, z.ZodTypeDef, unknown>;
/** @internal */
export type AttributeValue$Outbound = {
    attributeTypeId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    id?: string | null | undefined;
    updatedAt?: string | null | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const AttributeValue$outboundSchema: z.ZodType<AttributeValue$Outbound, z.ZodTypeDef, AttributeValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AttributeValue$ {
    /** @deprecated use `AttributeValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AttributeValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `AttributeValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AttributeValue$Outbound, z.ZodTypeDef, AttributeValue>;
    /** @deprecated use `AttributeValue$Outbound` instead. */
    type Outbound = AttributeValue$Outbound;
}
export declare function attributeValueToJSON(attributeValue: AttributeValue): string;
export declare function attributeValueFromJSON(jsonString: string): SafeParseResult<AttributeValue, SDKValidationError>;
