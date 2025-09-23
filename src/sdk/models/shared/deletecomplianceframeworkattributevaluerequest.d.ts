import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteComplianceFrameworkAttributeValueRequest message.
 */
export type DeleteComplianceFrameworkAttributeValueRequest = {};
/** @internal */
export declare const DeleteComplianceFrameworkAttributeValueRequest$inboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteComplianceFrameworkAttributeValueRequest$Outbound = {};
/** @internal */
export declare const DeleteComplianceFrameworkAttributeValueRequest$outboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, DeleteComplianceFrameworkAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteComplianceFrameworkAttributeValueRequest$ {
    /** @deprecated use `DeleteComplianceFrameworkAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteComplianceFrameworkAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, DeleteComplianceFrameworkAttributeValueRequest>;
    /** @deprecated use `DeleteComplianceFrameworkAttributeValueRequest$Outbound` instead. */
    type Outbound = DeleteComplianceFrameworkAttributeValueRequest$Outbound;
}
export declare function deleteComplianceFrameworkAttributeValueRequestToJSON(deleteComplianceFrameworkAttributeValueRequest: DeleteComplianceFrameworkAttributeValueRequest): string;
export declare function deleteComplianceFrameworkAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<DeleteComplianceFrameworkAttributeValueRequest, SDKValidationError>;
