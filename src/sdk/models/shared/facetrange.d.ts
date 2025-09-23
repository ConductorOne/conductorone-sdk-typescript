import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FacetRange message.
 */
export type FacetRange = {
    /**
     * The count of items in the range.
     */
    count?: number | null | undefined;
    /**
     * The display name of the range.
     */
    displayName?: string | null | undefined;
    /**
     * The starting value of the range.
     */
    from?: number | null | undefined;
    /**
     * The icon of the range.
     */
    iconUrl?: string | null | undefined;
    /**
     * The ending value of the range.
     */
    to?: number | null | undefined;
};
/** @internal */
export declare const FacetRange$inboundSchema: z.ZodType<FacetRange, z.ZodTypeDef, unknown>;
/** @internal */
export type FacetRange$Outbound = {
    count?: string | null | undefined;
    displayName?: string | null | undefined;
    from?: string | null | undefined;
    iconUrl?: string | null | undefined;
    to?: string | null | undefined;
};
/** @internal */
export declare const FacetRange$outboundSchema: z.ZodType<FacetRange$Outbound, z.ZodTypeDef, FacetRange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FacetRange$ {
    /** @deprecated use `FacetRange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FacetRange, z.ZodTypeDef, unknown>;
    /** @deprecated use `FacetRange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FacetRange$Outbound, z.ZodTypeDef, FacetRange>;
    /** @deprecated use `FacetRange$Outbound` instead. */
    type Outbound = FacetRange$Outbound;
}
export declare function facetRangeToJSON(facetRange: FacetRange): string;
export declare function facetRangeFromJSON(jsonString: string): SafeParseResult<FacetRange, SDKValidationError>;
