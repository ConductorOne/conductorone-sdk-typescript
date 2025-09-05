import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAttributeValueRequest message.
 */
export type DeleteAttributeValueRequest = {};
/** @internal */
export declare const DeleteAttributeValueRequest$inboundSchema: z.ZodType<DeleteAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAttributeValueRequest$Outbound = {};
/** @internal */
export declare const DeleteAttributeValueRequest$outboundSchema: z.ZodType<DeleteAttributeValueRequest$Outbound, z.ZodTypeDef, DeleteAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAttributeValueRequest$ {
    /** @deprecated use `DeleteAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAttributeValueRequest$Outbound, z.ZodTypeDef, DeleteAttributeValueRequest>;
    /** @deprecated use `DeleteAttributeValueRequest$Outbound` instead. */
    type Outbound = DeleteAttributeValueRequest$Outbound;
}
export declare function deleteAttributeValueRequestToJSON(deleteAttributeValueRequest: DeleteAttributeValueRequest): string;
export declare function deleteAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<DeleteAttributeValueRequest, SDKValidationError>;
