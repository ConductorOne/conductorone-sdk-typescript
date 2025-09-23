import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CreateComplianceFrameworkAttributeValueRequest message.
 */
export type CreateComplianceFrameworkAttributeValueRequest = {
    /**
     * The value field.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const CreateComplianceFrameworkAttributeValueRequest$inboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateComplianceFrameworkAttributeValueRequest$Outbound = {
    value?: string | null | undefined;
};
/** @internal */
export declare const CreateComplianceFrameworkAttributeValueRequest$outboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, CreateComplianceFrameworkAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateComplianceFrameworkAttributeValueRequest$ {
    /** @deprecated use `CreateComplianceFrameworkAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateComplianceFrameworkAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, CreateComplianceFrameworkAttributeValueRequest>;
    /** @deprecated use `CreateComplianceFrameworkAttributeValueRequest$Outbound` instead. */
    type Outbound = CreateComplianceFrameworkAttributeValueRequest$Outbound;
}
export declare function createComplianceFrameworkAttributeValueRequestToJSON(createComplianceFrameworkAttributeValueRequest: CreateComplianceFrameworkAttributeValueRequest): string;
export declare function createComplianceFrameworkAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<CreateComplianceFrameworkAttributeValueRequest, SDKValidationError>;
