import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The RequestCatalogManagementServiceListEntitlementsPerCatalogResponse message contains a list of results and a nextPageToken if applicable.
 */
export type RequestCatalogManagementServiceListEntitlementsPerCatalogResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementView> | null | undefined;
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
export declare const RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$ {
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$Outbound;
}
export declare function requestCatalogManagementServiceListEntitlementsPerCatalogResponseExpandedToJSON(requestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded: RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded): string;
export declare function requestCatalogManagementServiceListEntitlementsPerCatalogResponseExpandedFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded, SDKValidationError>;
/** @internal */
export declare const RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound = {
    expanded?: Array<RequestCatalogManagementServiceListEntitlementsPerCatalogResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsPerCatalogResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsPerCatalogResponse>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound;
}
export declare function requestCatalogManagementServiceListEntitlementsPerCatalogResponseToJSON(requestCatalogManagementServiceListEntitlementsPerCatalogResponse: RequestCatalogManagementServiceListEntitlementsPerCatalogResponse): string;
export declare function requestCatalogManagementServiceListEntitlementsPerCatalogResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListEntitlementsPerCatalogResponse, SDKValidationError>;
