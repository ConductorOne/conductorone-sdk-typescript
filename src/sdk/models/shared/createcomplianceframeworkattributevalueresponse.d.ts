import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * The CreateComplianceFrameworkAttributeValueResponse message.
 */
export type CreateComplianceFrameworkAttributeValueResponse = {
    value?: AttributeValue | null | undefined;
};
/** @internal */
export declare const CreateComplianceFrameworkAttributeValueResponse$inboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateComplianceFrameworkAttributeValueResponse$Outbound = {
    value?: AttributeValue$Outbound | null | undefined;
};
/** @internal */
export declare const CreateComplianceFrameworkAttributeValueResponse$outboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, CreateComplianceFrameworkAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateComplianceFrameworkAttributeValueResponse$ {
    /** @deprecated use `CreateComplianceFrameworkAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateComplianceFrameworkAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, CreateComplianceFrameworkAttributeValueResponse>;
    /** @deprecated use `CreateComplianceFrameworkAttributeValueResponse$Outbound` instead. */
    type Outbound = CreateComplianceFrameworkAttributeValueResponse$Outbound;
}
export declare function createComplianceFrameworkAttributeValueResponseToJSON(createComplianceFrameworkAttributeValueResponse: CreateComplianceFrameworkAttributeValueResponse): string;
export declare function createComplianceFrameworkAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<CreateComplianceFrameworkAttributeValueResponse, SDKValidationError>;
