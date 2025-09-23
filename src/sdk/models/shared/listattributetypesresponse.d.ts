import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeType, AttributeType$Outbound } from "./attributetype.js";
/**
 * ListAttributeTypesResponse is the response for listing attribute types.
 */
export type ListAttributeTypesResponse = {
    /**
     * The list of AttributeTypes.
     */
    list?: Array<AttributeType> | null | undefined;
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
export declare const ListAttributeTypesResponse$inboundSchema: z.ZodType<ListAttributeTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAttributeTypesResponse$Outbound = {
    list?: Array<AttributeType$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAttributeTypesResponse$outboundSchema: z.ZodType<ListAttributeTypesResponse$Outbound, z.ZodTypeDef, ListAttributeTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAttributeTypesResponse$ {
    /** @deprecated use `ListAttributeTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAttributeTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAttributeTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAttributeTypesResponse$Outbound, z.ZodTypeDef, ListAttributeTypesResponse>;
    /** @deprecated use `ListAttributeTypesResponse$Outbound` instead. */
    type Outbound = ListAttributeTypesResponse$Outbound;
}
export declare function listAttributeTypesResponseToJSON(listAttributeTypesResponse: ListAttributeTypesResponse): string;
export declare function listAttributeTypesResponseFromJSON(jsonString: string): SafeParseResult<ListAttributeTypesResponse, SDKValidationError>;
