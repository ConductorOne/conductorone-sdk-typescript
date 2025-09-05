import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CreateAttributeValueRequest message.
 */
export type CreateAttributeValueRequest = {
    /**
     * The attributeTypeId field.
     */
    attributeTypeId?: string | null | undefined;
    /**
     * The value field.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const CreateAttributeValueRequest$inboundSchema: z.ZodType<CreateAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAttributeValueRequest$Outbound = {
    attributeTypeId?: string | null | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const CreateAttributeValueRequest$outboundSchema: z.ZodType<CreateAttributeValueRequest$Outbound, z.ZodTypeDef, CreateAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAttributeValueRequest$ {
    /** @deprecated use `CreateAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAttributeValueRequest$Outbound, z.ZodTypeDef, CreateAttributeValueRequest>;
    /** @deprecated use `CreateAttributeValueRequest$Outbound` instead. */
    type Outbound = CreateAttributeValueRequest$Outbound;
}
export declare function createAttributeValueRequestToJSON(createAttributeValueRequest: CreateAttributeValueRequest): string;
export declare function createAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<CreateAttributeValueRequest, SDKValidationError>;
