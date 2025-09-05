import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceGetRequest = {
    appId: string | null;
    id: string | null;
};
export type C1ApiAppV1ConnectorServiceGetResponse = {
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
     * The ConnectorServiceGetResponse message contains the connectorView, and an expand mask.
     */
    connectorServiceGetResponse?: shared.ConnectorServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceGetRequest$Outbound = {
    app_id: string | null;
    id: string | null;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceGetRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceGetRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceGetRequestToJSON(c1ApiAppV1ConnectorServiceGetRequest: C1ApiAppV1ConnectorServiceGetRequest): string;
export declare function c1ApiAppV1ConnectorServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceGetResponse?: shared.ConnectorServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceGetResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceGetResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceGetResponseToJSON(c1ApiAppV1ConnectorServiceGetResponse: C1ApiAppV1ConnectorServiceGetResponse): string;
export declare function c1ApiAppV1ConnectorServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceGetResponse, SDKValidationError>;
