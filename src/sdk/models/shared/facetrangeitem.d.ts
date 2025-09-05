import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FacetRange, FacetRange$Outbound } from "./facetrange.js";
/**
 * The FacetRangeItem message.
 */
export type FacetRangeItem = {
    /**
     * An array of facet ranges.
     */
    ranges?: Array<FacetRange> | null | undefined;
};
/** @internal */
export declare const FacetRangeItem$inboundSchema: z.ZodType<FacetRangeItem, z.ZodTypeDef, unknown>;
/** @internal */
export type FacetRangeItem$Outbound = {
    ranges?: Array<FacetRange$Outbound> | null | undefined;
};
/** @internal */
export declare const FacetRangeItem$outboundSchema: z.ZodType<FacetRangeItem$Outbound, z.ZodTypeDef, FacetRangeItem>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FacetRangeItem$ {
    /** @deprecated use `FacetRangeItem$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FacetRangeItem, z.ZodTypeDef, unknown>;
    /** @deprecated use `FacetRangeItem$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FacetRangeItem$Outbound, z.ZodTypeDef, FacetRangeItem>;
    /** @deprecated use `FacetRangeItem$Outbound` instead. */
    type Outbound = FacetRangeItem$Outbound;
}
export declare function facetRangeItemToJSON(facetRangeItem: FacetRangeItem): string;
export declare function facetRangeItemFromJSON(jsonString: string): SafeParseResult<FacetRangeItem, SDKValidationError>;
