import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceListRequest = {
    appId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1ConnectorServiceListResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * The ConnectorServiceListResponse message contains a list of results and a nextPageToken if applicable
     */
    connectorServiceListResponse?: shared.ConnectorServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceListRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceListRequest$Outbound = {
    app_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceListRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceListRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceListRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceListRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceListRequestToJSON(c1ApiAppV1ConnectorServiceListRequest: C1ApiAppV1ConnectorServiceListRequest): string;
export declare function c1ApiAppV1ConnectorServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceListResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceListResponse?: shared.ConnectorServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceListResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceListResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceListResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceListResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceListResponseToJSON(c1ApiAppV1ConnectorServiceListResponse: C1ApiAppV1ConnectorServiceListResponse): string;
export declare function c1ApiAppV1ConnectorServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceListResponse, SDKValidationError>;
