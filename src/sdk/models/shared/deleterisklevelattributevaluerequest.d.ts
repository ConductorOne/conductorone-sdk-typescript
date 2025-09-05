import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteRiskLevelAttributeValueRequest message.
 */
export type DeleteRiskLevelAttributeValueRequest = {};
/** @internal */
export declare const DeleteRiskLevelAttributeValueRequest$inboundSchema: z.ZodType<DeleteRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRiskLevelAttributeValueRequest$Outbound = {};
/** @internal */
export declare const DeleteRiskLevelAttributeValueRequest$outboundSchema: z.ZodType<DeleteRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, DeleteRiskLevelAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteRiskLevelAttributeValueRequest$ {
    /** @deprecated use `DeleteRiskLevelAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteRiskLevelAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, DeleteRiskLevelAttributeValueRequest>;
    /** @deprecated use `DeleteRiskLevelAttributeValueRequest$Outbound` instead. */
    type Outbound = DeleteRiskLevelAttributeValueRequest$Outbound;
}
export declare function deleteRiskLevelAttributeValueRequestToJSON(deleteRiskLevelAttributeValueRequest: DeleteRiskLevelAttributeValueRequest): string;
export declare function deleteRiskLevelAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<DeleteRiskLevelAttributeValueRequest, SDKValidationError>;
