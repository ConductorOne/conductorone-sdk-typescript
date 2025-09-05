import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * GetAttributeValueResponse is the response for getting an attribute value by id.
 */
export type GetAttributeValueResponse = {
    value?: AttributeValue | null | undefined;
};
/** @internal */
export declare const GetAttributeValueResponse$inboundSchema: z.ZodType<GetAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAttributeValueResponse$Outbound = {
    value?: AttributeValue$Outbound | null | undefined;
};
/** @internal */
export declare const GetAttributeValueResponse$outboundSchema: z.ZodType<GetAttributeValueResponse$Outbound, z.ZodTypeDef, GetAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAttributeValueResponse$ {
    /** @deprecated use `GetAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAttributeValueResponse$Outbound, z.ZodTypeDef, GetAttributeValueResponse>;
    /** @deprecated use `GetAttributeValueResponse$Outbound` instead. */
    type Outbound = GetAttributeValueResponse$Outbound;
}
export declare function getAttributeValueResponseToJSON(getAttributeValueResponse: GetAttributeValueResponse): string;
export declare function getAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<GetAttributeValueResponse, SDKValidationError>;
