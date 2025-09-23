import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * DeleteAttributeValueResponse is the empty response for deleting an attribute value.
 */
export type DeleteAttributeValueResponse = {};
/** @internal */
export declare const DeleteAttributeValueResponse$inboundSchema: z.ZodType<DeleteAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAttributeValueResponse$Outbound = {};
/** @internal */
export declare const DeleteAttributeValueResponse$outboundSchema: z.ZodType<DeleteAttributeValueResponse$Outbound, z.ZodTypeDef, DeleteAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAttributeValueResponse$ {
    /** @deprecated use `DeleteAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAttributeValueResponse$Outbound, z.ZodTypeDef, DeleteAttributeValueResponse>;
    /** @deprecated use `DeleteAttributeValueResponse$Outbound` instead. */
    type Outbound = DeleteAttributeValueResponse$Outbound;
}
export declare function deleteAttributeValueResponseToJSON(deleteAttributeValueResponse: DeleteAttributeValueResponse): string;
export declare function deleteAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<DeleteAttributeValueResponse, SDKValidationError>;
