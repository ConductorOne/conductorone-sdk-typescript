import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceRef, AppResourceRef$Outbound } from "./appresourceref.js";
/**
 * The SearchAppResourcesRequest message.
 */
export type SearchAppResourcesRequest = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The appUserIds field.
     */
    appUserIds?: Array<string> | null | undefined;
    /**
     * The excludeDeletedResourceBindings field.
     */
    excludeDeletedResourceBindings?: boolean | null | undefined;
    /**
     * The excludeResourceIds field.
     */
    excludeResourceIds?: Array<string> | null | undefined;
    /**
     * The excludeResourceTypeTraitIds field.
     */
    excludeResourceTypeTraitIds?: Array<string> | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<AppResourceRef> | null | undefined;
    /**
     * The resourceIds field.
     */
    resourceIds?: Array<string> | null | undefined;
    /**
     * The resourceTypeIds field.
     */
    resourceTypeIds?: Array<string> | null | undefined;
    /**
     * The resourceTypeTraitIds field.
     */
    resourceTypeTraitIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SearchAppResourcesRequest$inboundSchema: z.ZodType<SearchAppResourcesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppResourcesRequest$Outbound = {
    appId?: string | null | undefined;
    appUserIds?: Array<string> | null | undefined;
    excludeDeletedResourceBindings?: boolean | null | undefined;
    excludeResourceIds?: Array<string> | null | undefined;
    excludeResourceTypeTraitIds?: Array<string> | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<AppResourceRef$Outbound> | null | undefined;
    resourceIds?: Array<string> | null | undefined;
    resourceTypeIds?: Array<string> | null | undefined;
    resourceTypeTraitIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SearchAppResourcesRequest$outboundSchema: z.ZodType<SearchAppResourcesRequest$Outbound, z.ZodTypeDef, SearchAppResourcesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppResourcesRequest$ {
    /** @deprecated use `SearchAppResourcesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppResourcesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppResourcesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppResourcesRequest$Outbound, z.ZodTypeDef, SearchAppResourcesRequest>;
    /** @deprecated use `SearchAppResourcesRequest$Outbound` instead. */
    type Outbound = SearchAppResourcesRequest$Outbound;
}
export declare function searchAppResourcesRequestToJSON(searchAppResourcesRequest: SearchAppResourcesRequest): string;
export declare function searchAppResourcesRequestFromJSON(jsonString: string): SafeParseResult<SearchAppResourcesRequest, SDKValidationError>;
