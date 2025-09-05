import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RequestCatalogView, RequestCatalogView$Outbound } from "./requestcatalogview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type RequestCatalogManagementServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The request catalog management service get response returns a request catalog view with the expanded items in the expanded array indicated by the expand mask in the request.
 */
export type RequestCatalogManagementServiceGetResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<RequestCatalogManagementServiceGetResponseExpanded> | null | undefined;
    requestCatalogView?: RequestCatalogView | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceGetResponseExpanded$inboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const RequestCatalogManagementServiceGetResponseExpanded$outboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceGetResponseExpanded$ {
    /** @deprecated use `RequestCatalogManagementServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceGetResponseExpanded>;
    /** @deprecated use `RequestCatalogManagementServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceGetResponseExpanded$Outbound;
}
export declare function requestCatalogManagementServiceGetResponseExpandedToJSON(requestCatalogManagementServiceGetResponseExpanded: RequestCatalogManagementServiceGetResponseExpanded): string;
export declare function requestCatalogManagementServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const RequestCatalogManagementServiceGetResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceGetResponse$Outbound = {
    expanded?: Array<RequestCatalogManagementServiceGetResponseExpanded$Outbound> | null | undefined;
    requestCatalogView?: RequestCatalogView$Outbound | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceGetResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceGetResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceGetResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceGetResponse>;
    /** @deprecated use `RequestCatalogManagementServiceGetResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceGetResponse$Outbound;
}
export declare function requestCatalogManagementServiceGetResponseToJSON(requestCatalogManagementServiceGetResponse: RequestCatalogManagementServiceGetResponse): string;
export declare function requestCatalogManagementServiceGetResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceGetResponse, SDKValidationError>;
