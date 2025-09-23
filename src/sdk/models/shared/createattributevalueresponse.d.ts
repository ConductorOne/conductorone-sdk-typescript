import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * CreateAttributeValueResponse is the response for creating an attribute value.
 */
export type CreateAttributeValueResponse = {
    value?: AttributeValue | null | undefined;
};
/** @internal */
export declare const CreateAttributeValueResponse$inboundSchema: z.ZodType<CreateAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAttributeValueResponse$Outbound = {
    value?: AttributeValue$Outbound | null | undefined;
};
/** @internal */
export declare const CreateAttributeValueResponse$outboundSchema: z.ZodType<CreateAttributeValueResponse$Outbound, z.ZodTypeDef, CreateAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAttributeValueResponse$ {
    /** @deprecated use `CreateAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAttributeValueResponse$Outbound, z.ZodTypeDef, CreateAttributeValueResponse>;
    /** @deprecated use `CreateAttributeValueResponse$Outbound` instead. */
    type Outbound = CreateAttributeValueResponse$Outbound;
}
export declare function createAttributeValueResponseToJSON(createAttributeValueResponse: CreateAttributeValueResponse): string;
export declare function createAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<CreateAttributeValueResponse, SDKValidationError>;
