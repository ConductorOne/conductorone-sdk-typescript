import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * ListAttributeValuesResponse is the response for listing attribute values for a given AttributeType.
 */
export type ListAttributeValuesResponse = {
    /**
     * The list of AttributeValues.
     */
    list?: Array<AttributeValue> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAttributeValuesResponse$inboundSchema: z.ZodType<ListAttributeValuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAttributeValuesResponse$Outbound = {
    list?: Array<AttributeValue$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAttributeValuesResponse$outboundSchema: z.ZodType<ListAttributeValuesResponse$Outbound, z.ZodTypeDef, ListAttributeValuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAttributeValuesResponse$ {
    /** @deprecated use `ListAttributeValuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAttributeValuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAttributeValuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAttributeValuesResponse$Outbound, z.ZodTypeDef, ListAttributeValuesResponse>;
    /** @deprecated use `ListAttributeValuesResponse$Outbound` instead. */
    type Outbound = ListAttributeValuesResponse$Outbound;
}
export declare function listAttributeValuesResponseToJSON(listAttributeValuesResponse: ListAttributeValuesResponse): string;
export declare function listAttributeValuesResponseFromJSON(jsonString: string): SafeParseResult<ListAttributeValuesResponse, SDKValidationError>;
