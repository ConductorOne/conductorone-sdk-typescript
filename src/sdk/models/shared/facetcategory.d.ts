import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FacetRangeItem, FacetRangeItem$Outbound } from "./facetrangeitem.js";
import { FacetValueItem, FacetValueItem$Outbound } from "./facetvalueitem.js";
/**
 * The FacetCategory indicates a grouping of facets by type. For example, facets "OnePassword" and "Okta" would group under an "Apps" category.
 *
 * @remarks
 *
 * This message contains a oneof named item. Only a single field of the following list may be set at a time:
 *   - value
 *   - range
 */
export type FacetCategory = {
    /**
     * The display name of the category.
     */
    displayName?: string | null | undefined;
    /**
     * An icon for the category.
     */
    iconUrl?: string | null | undefined;
    /**
     * The param that is being set when checking a facet in this category.
     */
    param?: string | null | undefined;
    range?: FacetRangeItem | null | undefined;
    value?: FacetValueItem | null | undefined;
};
/** @internal */
export declare const FacetCategory$inboundSchema: z.ZodType<FacetCategory, z.ZodTypeDef, unknown>;
/** @internal */
export type FacetCategory$Outbound = {
    displayName?: string | null | undefined;
    iconUrl?: string | null | undefined;
    param?: string | null | undefined;
    range?: FacetRangeItem$Outbound | null | undefined;
    value?: FacetValueItem$Outbound | null | undefined;
};
/** @internal */
export declare const FacetCategory$outboundSchema: z.ZodType<FacetCategory$Outbound, z.ZodTypeDef, FacetCategory>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FacetCategory$ {
    /** @deprecated use `FacetCategory$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FacetCategory, z.ZodTypeDef, unknown>;
    /** @deprecated use `FacetCategory$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FacetCategory$Outbound, z.ZodTypeDef, FacetCategory>;
    /** @deprecated use `FacetCategory$Outbound` instead. */
    type Outbound = FacetCategory$Outbound;
}
export declare function facetCategoryToJSON(facetCategory: FacetCategory): string;
export declare function facetCategoryFromJSON(jsonString: string): SafeParseResult<FacetCategory, SDKValidationError>;
