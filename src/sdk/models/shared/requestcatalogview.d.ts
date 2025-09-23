import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RequestCatalog, RequestCatalog$Outbound } from "./requestcatalog.js";
/**
 * The request catalog view contains the serialized request catalog and paths to objects referenced by the request catalog.
 */
export type RequestCatalogView = {
    /**
     * JSONPATH expression indicating the location of the access entitlement objects, that the request catalog allows users to request, in the array.
     */
    accessEntitlementsPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the User object, that created the request catalog, in the array.
     */
    createdByUserPath?: string | null | undefined;
    /**
     * Total number of the members of the catalog
     */
    memberCount?: number | null | undefined;
    requestCatalog?: RequestCatalog | null | undefined;
};
/** @internal */
export declare const RequestCatalogView$inboundSchema: z.ZodType<RequestCatalogView, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogView$Outbound = {
    accessEntitlementsPath?: string | null | undefined;
    createdByUserPath?: string | null | undefined;
    memberCount?: string | null | undefined;
    requestCatalog?: RequestCatalog$Outbound | null | undefined;
};
/** @internal */
export declare const RequestCatalogView$outboundSchema: z.ZodType<RequestCatalogView$Outbound, z.ZodTypeDef, RequestCatalogView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogView$ {
    /** @deprecated use `RequestCatalogView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogView, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogView$Outbound, z.ZodTypeDef, RequestCatalogView>;
    /** @deprecated use `RequestCatalogView$Outbound` instead. */
    type Outbound = RequestCatalogView$Outbound;
}
export declare function requestCatalogViewToJSON(requestCatalogView: RequestCatalogView): string;
export declare function requestCatalogViewFromJSON(jsonString: string): SafeParseResult<RequestCatalogView, SDKValidationError>;
