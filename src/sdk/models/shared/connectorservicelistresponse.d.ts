import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorView, ConnectorView$Outbound } from "./connectorview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The ConnectorServiceListResponse message contains a list of results and a nextPageToken if applicable
 */
export type ConnectorServiceListResponse = {
    /**
     * List of serialized related objects
     */
    expanded?: Array<ConnectorServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<ConnectorView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceListResponseExpanded$inboundSchema: z.ZodType<ConnectorServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ConnectorServiceListResponseExpanded$outboundSchema: z.ZodType<ConnectorServiceListResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceListResponseExpanded$ {
    /** @deprecated use `ConnectorServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceListResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceListResponseExpanded>;
    /** @deprecated use `ConnectorServiceListResponseExpanded$Outbound` instead. */
    type Outbound = ConnectorServiceListResponseExpanded$Outbound;
}
export declare function connectorServiceListResponseExpandedToJSON(connectorServiceListResponseExpanded: ConnectorServiceListResponseExpanded): string;
export declare function connectorServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<ConnectorServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const ConnectorServiceListResponse$inboundSchema: z.ZodType<ConnectorServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceListResponse$Outbound = {
    expanded?: Array<ConnectorServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<ConnectorView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceListResponse$outboundSchema: z.ZodType<ConnectorServiceListResponse$Outbound, z.ZodTypeDef, ConnectorServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceListResponse$ {
    /** @deprecated use `ConnectorServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceListResponse$Outbound, z.ZodTypeDef, ConnectorServiceListResponse>;
    /** @deprecated use `ConnectorServiceListResponse$Outbound` instead. */
    type Outbound = ConnectorServiceListResponse$Outbound;
}
export declare function connectorServiceListResponseToJSON(connectorServiceListResponse: ConnectorServiceListResponse): string;
export declare function connectorServiceListResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceListResponse, SDKValidationError>;
