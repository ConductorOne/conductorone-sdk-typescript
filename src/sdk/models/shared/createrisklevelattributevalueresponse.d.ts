import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * The CreateRiskLevelAttributeValueResponse message.
 */
export type CreateRiskLevelAttributeValueResponse = {
    value?: AttributeValue | null | undefined;
};
/** @internal */
export declare const CreateRiskLevelAttributeValueResponse$inboundSchema: z.ZodType<CreateRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRiskLevelAttributeValueResponse$Outbound = {
    value?: AttributeValue$Outbound | null | undefined;
};
/** @internal */
export declare const CreateRiskLevelAttributeValueResponse$outboundSchema: z.ZodType<CreateRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, CreateRiskLevelAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateRiskLevelAttributeValueResponse$ {
    /** @deprecated use `CreateRiskLevelAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateRiskLevelAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, CreateRiskLevelAttributeValueResponse>;
    /** @deprecated use `CreateRiskLevelAttributeValueResponse$Outbound` instead. */
    type Outbound = CreateRiskLevelAttributeValueResponse$Outbound;
}
export declare function createRiskLevelAttributeValueResponseToJSON(createRiskLevelAttributeValueResponse: CreateRiskLevelAttributeValueResponse): string;
export declare function createRiskLevelAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<CreateRiskLevelAttributeValueResponse, SDKValidationError>;
