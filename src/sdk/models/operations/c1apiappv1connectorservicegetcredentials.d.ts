import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceGetCredentialsRequest = {
    appId: string | null;
    connectorId: string | null;
    id: string | null;
};
export type C1ApiAppV1ConnectorServiceGetCredentialsResponse = {
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
     * ConnectorServiceGetCredentialsResponse is the response returned by the get method.
     */
    connectorServiceGetCredentialsResponse?: shared.ConnectorServiceGetCredentialsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetCredentialsRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceGetCredentialsRequest$Outbound = {
    app_id: string | null;
    connector_id: string | null;
    id: string | null;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetCredentialsRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetCredentialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceGetCredentialsRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetCredentialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetCredentialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetCredentialsRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetCredentialsRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceGetCredentialsRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceGetCredentialsRequestToJSON(c1ApiAppV1ConnectorServiceGetCredentialsRequest: C1ApiAppV1ConnectorServiceGetCredentialsRequest): string;
export declare function c1ApiAppV1ConnectorServiceGetCredentialsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceGetCredentialsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetCredentialsResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceGetCredentialsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceGetCredentialsResponse?: shared.ConnectorServiceGetCredentialsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceGetCredentialsResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetCredentialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceGetCredentialsResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetCredentialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetCredentialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceGetCredentialsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceGetCredentialsResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceGetCredentialsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceGetCredentialsResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceGetCredentialsResponseToJSON(c1ApiAppV1ConnectorServiceGetCredentialsResponse: C1ApiAppV1ConnectorServiceGetCredentialsResponse): string;
export declare function c1ApiAppV1ConnectorServiceGetCredentialsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceGetCredentialsResponse, SDKValidationError>;
