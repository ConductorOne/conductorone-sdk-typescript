import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FacetValue, FacetValue$Outbound } from "./facetvalue.js";
/**
 * The FacetValueItem message.
 */
export type FacetValueItem = {
    /**
     * An array of facet values.
     */
    values?: Array<FacetValue> | null | undefined;
};
/** @internal */
export declare const FacetValueItem$inboundSchema: z.ZodType<FacetValueItem, z.ZodTypeDef, unknown>;
/** @internal */
export type FacetValueItem$Outbound = {
    values?: Array<FacetValue$Outbound> | null | undefined;
};
/** @internal */
export declare const FacetValueItem$outboundSchema: z.ZodType<FacetValueItem$Outbound, z.ZodTypeDef, FacetValueItem>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FacetValueItem$ {
    /** @deprecated use `FacetValueItem$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FacetValueItem, z.ZodTypeDef, unknown>;
    /** @deprecated use `FacetValueItem$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FacetValueItem$Outbound, z.ZodTypeDef, FacetValueItem>;
    /** @deprecated use `FacetValueItem$Outbound` instead. */
    type Outbound = FacetValueItem$Outbound;
}
export declare function facetValueItemToJSON(facetValueItem: FacetValueItem): string;
export declare function facetValueItemFromJSON(jsonString: string): SafeParseResult<FacetValueItem, SDKValidationError>;
