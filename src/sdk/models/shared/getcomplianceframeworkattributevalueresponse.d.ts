import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * The GetComplianceFrameworkAttributeValueResponse message.
 */
export type GetComplianceFrameworkAttributeValueResponse = {
    value?: AttributeValue | null | undefined;
};
/** @internal */
export declare const GetComplianceFrameworkAttributeValueResponse$inboundSchema: z.ZodType<GetComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetComplianceFrameworkAttributeValueResponse$Outbound = {
    value?: AttributeValue$Outbound | null | undefined;
};
/** @internal */
export declare const GetComplianceFrameworkAttributeValueResponse$outboundSchema: z.ZodType<GetComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, GetComplianceFrameworkAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetComplianceFrameworkAttributeValueResponse$ {
    /** @deprecated use `GetComplianceFrameworkAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetComplianceFrameworkAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, GetComplianceFrameworkAttributeValueResponse>;
    /** @deprecated use `GetComplianceFrameworkAttributeValueResponse$Outbound` instead. */
    type Outbound = GetComplianceFrameworkAttributeValueResponse$Outbound;
}
export declare function getComplianceFrameworkAttributeValueResponseToJSON(getComplianceFrameworkAttributeValueResponse: GetComplianceFrameworkAttributeValueResponse): string;
export declare function getComplianceFrameworkAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<GetComplianceFrameworkAttributeValueResponse, SDKValidationError>;
