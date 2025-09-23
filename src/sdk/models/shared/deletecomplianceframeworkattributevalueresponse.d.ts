import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteComplianceFrameworkAttributeValueResponse message.
 */
export type DeleteComplianceFrameworkAttributeValueResponse = {};
/** @internal */
export declare const DeleteComplianceFrameworkAttributeValueResponse$inboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteComplianceFrameworkAttributeValueResponse$Outbound = {};
/** @internal */
export declare const DeleteComplianceFrameworkAttributeValueResponse$outboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, DeleteComplianceFrameworkAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteComplianceFrameworkAttributeValueResponse$ {
    /** @deprecated use `DeleteComplianceFrameworkAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteComplianceFrameworkAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, DeleteComplianceFrameworkAttributeValueResponse>;
    /** @deprecated use `DeleteComplianceFrameworkAttributeValueResponse$Outbound` instead. */
    type Outbound = DeleteComplianceFrameworkAttributeValueResponse$Outbound;
}
export declare function deleteComplianceFrameworkAttributeValueResponseToJSON(deleteComplianceFrameworkAttributeValueResponse: DeleteComplianceFrameworkAttributeValueResponse): string;
export declare function deleteComplianceFrameworkAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<DeleteComplianceFrameworkAttributeValueResponse, SDKValidationError>;
