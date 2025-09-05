import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * AttributeType defines the type of an attribute.
 */
export type AttributeType = {
    /**
     * The ID of the AttributeType.
     */
    id?: string | null | undefined;
    /**
     * The name of the AttributeType.
     */
    name?: string | null | undefined;
};
/** @internal */
export declare const AttributeType$inboundSchema: z.ZodType<AttributeType, z.ZodTypeDef, unknown>;
/** @internal */
export type AttributeType$Outbound = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};
/** @internal */
export declare const AttributeType$outboundSchema: z.ZodType<AttributeType$Outbound, z.ZodTypeDef, AttributeType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AttributeType$ {
    /** @deprecated use `AttributeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AttributeType, z.ZodTypeDef, unknown>;
    /** @deprecated use `AttributeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AttributeType$Outbound, z.ZodTypeDef, AttributeType>;
    /** @deprecated use `AttributeType$Outbound` instead. */
    type Outbound = AttributeType$Outbound;
}
export declare function attributeTypeToJSON(attributeType: AttributeType): string;
export declare function attributeTypeFromJSON(jsonString: string): SafeParseResult<AttributeType, SDKValidationError>;
