import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FacetCategory, FacetCategory$Outbound } from "./facetcategory.js";
/**
 * Indicates one value of a facet.
 */
export type Facets = {
    /**
     * The count of items in this facet.
     */
    count?: number | null | undefined;
    /**
     * The facet being referenced.
     */
    facets?: Array<FacetCategory> | null | undefined;
};
/** @internal */
export declare const Facets$inboundSchema: z.ZodType<Facets, z.ZodTypeDef, unknown>;
/** @internal */
export type Facets$Outbound = {
    count?: string | null | undefined;
    facets?: Array<FacetCategory$Outbound> | null | undefined;
};
/** @internal */
export declare const Facets$outboundSchema: z.ZodType<Facets$Outbound, z.ZodTypeDef, Facets>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Facets$ {
    /** @deprecated use `Facets$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Facets, z.ZodTypeDef, unknown>;
    /** @deprecated use `Facets$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Facets$Outbound, z.ZodTypeDef, Facets>;
    /** @deprecated use `Facets$Outbound` instead. */
    type Outbound = Facets$Outbound;
}
export declare function facetsToJSON(facets: Facets): string;
export declare function facetsFromJSON(jsonString: string): SafeParseResult<Facets, SDKValidationError>;
