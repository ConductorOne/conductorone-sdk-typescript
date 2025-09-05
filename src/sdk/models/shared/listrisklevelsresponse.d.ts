import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * The ListRiskLevelsResponse message.
 */
export type ListRiskLevelsResponse = {
    /**
     * The list field.
     */
    list?: Array<AttributeValue> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListRiskLevelsResponse$inboundSchema: z.ZodType<ListRiskLevelsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListRiskLevelsResponse$Outbound = {
    list?: Array<AttributeValue$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListRiskLevelsResponse$outboundSchema: z.ZodType<ListRiskLevelsResponse$Outbound, z.ZodTypeDef, ListRiskLevelsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListRiskLevelsResponse$ {
    /** @deprecated use `ListRiskLevelsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListRiskLevelsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListRiskLevelsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListRiskLevelsResponse$Outbound, z.ZodTypeDef, ListRiskLevelsResponse>;
    /** @deprecated use `ListRiskLevelsResponse$Outbound` instead. */
    type Outbound = ListRiskLevelsResponse$Outbound;
}
export declare function listRiskLevelsResponseToJSON(listRiskLevelsResponse: ListRiskLevelsResponse): string;
export declare function listRiskLevelsResponseFromJSON(jsonString: string): SafeParseResult<ListRiskLevelsResponse, SDKValidationError>;
