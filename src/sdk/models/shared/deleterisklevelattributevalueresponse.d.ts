import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteRiskLevelAttributeValueResponse message.
 */
export type DeleteRiskLevelAttributeValueResponse = {};
/** @internal */
export declare const DeleteRiskLevelAttributeValueResponse$inboundSchema: z.ZodType<DeleteRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRiskLevelAttributeValueResponse$Outbound = {};
/** @internal */
export declare const DeleteRiskLevelAttributeValueResponse$outboundSchema: z.ZodType<DeleteRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, DeleteRiskLevelAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteRiskLevelAttributeValueResponse$ {
    /** @deprecated use `DeleteRiskLevelAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteRiskLevelAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, DeleteRiskLevelAttributeValueResponse>;
    /** @deprecated use `DeleteRiskLevelAttributeValueResponse$Outbound` instead. */
    type Outbound = DeleteRiskLevelAttributeValueResponse$Outbound;
}
export declare function deleteRiskLevelAttributeValueResponseToJSON(deleteRiskLevelAttributeValueResponse: DeleteRiskLevelAttributeValueResponse): string;
export declare function deleteRiskLevelAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<DeleteRiskLevelAttributeValueResponse, SDKValidationError>;
