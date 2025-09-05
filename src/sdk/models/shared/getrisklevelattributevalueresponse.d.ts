import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * The GetRiskLevelAttributeValueResponse message.
 */
export type GetRiskLevelAttributeValueResponse = {
    value?: AttributeValue | null | undefined;
};
/** @internal */
export declare const GetRiskLevelAttributeValueResponse$inboundSchema: z.ZodType<GetRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRiskLevelAttributeValueResponse$Outbound = {
    value?: AttributeValue$Outbound | null | undefined;
};
/** @internal */
export declare const GetRiskLevelAttributeValueResponse$outboundSchema: z.ZodType<GetRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, GetRiskLevelAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetRiskLevelAttributeValueResponse$ {
    /** @deprecated use `GetRiskLevelAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetRiskLevelAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, GetRiskLevelAttributeValueResponse>;
    /** @deprecated use `GetRiskLevelAttributeValueResponse$Outbound` instead. */
    type Outbound = GetRiskLevelAttributeValueResponse$Outbound;
}
export declare function getRiskLevelAttributeValueResponseToJSON(getRiskLevelAttributeValueResponse: GetRiskLevelAttributeValueResponse): string;
export declare function getRiskLevelAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<GetRiskLevelAttributeValueResponse, SDKValidationError>;
