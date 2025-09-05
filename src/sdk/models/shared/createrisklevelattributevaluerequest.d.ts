import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CreateRiskLevelAttributeValueRequest message.
 */
export type CreateRiskLevelAttributeValueRequest = {
    /**
     * The value field.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const CreateRiskLevelAttributeValueRequest$inboundSchema: z.ZodType<CreateRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRiskLevelAttributeValueRequest$Outbound = {
    value?: string | null | undefined;
};
/** @internal */
export declare const CreateRiskLevelAttributeValueRequest$outboundSchema: z.ZodType<CreateRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, CreateRiskLevelAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateRiskLevelAttributeValueRequest$ {
    /** @deprecated use `CreateRiskLevelAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateRiskLevelAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, CreateRiskLevelAttributeValueRequest>;
    /** @deprecated use `CreateRiskLevelAttributeValueRequest$Outbound` instead. */
    type Outbound = CreateRiskLevelAttributeValueRequest$Outbound;
}
export declare function createRiskLevelAttributeValueRequestToJSON(createRiskLevelAttributeValueRequest: CreateRiskLevelAttributeValueRequest): string;
export declare function createRiskLevelAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<CreateRiskLevelAttributeValueRequest, SDKValidationError>;
