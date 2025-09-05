import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A FacetValue message contains count and value of the facet entry.
 */
export type FacetValue = {
    /**
     * The count of the values in this facet.
     */
    count?: number | null | undefined;
    /**
     * The name of this facet.
     */
    displayName?: string | null | undefined;
    /**
     * The icon for this facet.
     */
    iconUrl?: string | null | undefined;
    /**
     * The value of this facet.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const FacetValue$inboundSchema: z.ZodType<FacetValue, z.ZodTypeDef, unknown>;
/** @internal */
export type FacetValue$Outbound = {
    count?: string | null | undefined;
    displayName?: string | null | undefined;
    iconUrl?: string | null | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const FacetValue$outboundSchema: z.ZodType<FacetValue$Outbound, z.ZodTypeDef, FacetValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FacetValue$ {
    /** @deprecated use `FacetValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FacetValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `FacetValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FacetValue$Outbound, z.ZodTypeDef, FacetValue>;
    /** @deprecated use `FacetValue$Outbound` instead. */
    type Outbound = FacetValue$Outbound;
}
export declare function facetValueToJSON(facetValue: FacetValue): string;
export declare function facetValueFromJSON(jsonString: string): SafeParseResult<FacetValue, SDKValidationError>;
