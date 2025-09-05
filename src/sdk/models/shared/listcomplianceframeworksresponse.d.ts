import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * The ListComplianceFrameworksResponse message.
 */
export type ListComplianceFrameworksResponse = {
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
export declare const ListComplianceFrameworksResponse$inboundSchema: z.ZodType<ListComplianceFrameworksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListComplianceFrameworksResponse$Outbound = {
    list?: Array<AttributeValue$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListComplianceFrameworksResponse$outboundSchema: z.ZodType<ListComplianceFrameworksResponse$Outbound, z.ZodTypeDef, ListComplianceFrameworksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListComplianceFrameworksResponse$ {
    /** @deprecated use `ListComplianceFrameworksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListComplianceFrameworksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListComplianceFrameworksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListComplianceFrameworksResponse$Outbound, z.ZodTypeDef, ListComplianceFrameworksResponse>;
    /** @deprecated use `ListComplianceFrameworksResponse$Outbound` instead. */
    type Outbound = ListComplianceFrameworksResponse$Outbound;
}
export declare function listComplianceFrameworksResponseToJSON(listComplianceFrameworksResponse: ListComplianceFrameworksResponse): string;
export declare function listComplianceFrameworksResponseFromJSON(jsonString: string): SafeParseResult<ListComplianceFrameworksResponse, SDKValidationError>;
