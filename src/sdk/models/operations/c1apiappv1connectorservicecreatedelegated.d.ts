import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceCreateDelegatedRequest = {
    appId: string | null;
    connectorServiceCreateDelegatedRequest?: shared.ConnectorServiceCreateDelegatedRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceCreateDelegatedResponse = {
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
     * The ConnectorServiceCreateResponse is the response returned from creating a connector.
     */
    connectorServiceCreateResponse?: shared.ConnectorServiceCreateResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateDelegatedRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceCreateDelegatedRequest$Outbound = {
    app_id: string | null;
    ConnectorServiceCreateDelegatedRequest?: shared.ConnectorServiceCreateDelegatedRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateDelegatedRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateDelegatedRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceCreateDelegatedRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateDelegatedRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateDelegatedRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateDelegatedRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateDelegatedRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceCreateDelegatedRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceCreateDelegatedRequestToJSON(c1ApiAppV1ConnectorServiceCreateDelegatedRequest: C1ApiAppV1ConnectorServiceCreateDelegatedRequest): string;
export declare function c1ApiAppV1ConnectorServiceCreateDelegatedRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceCreateDelegatedRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateDelegatedResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceCreateDelegatedResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceCreateResponse?: shared.ConnectorServiceCreateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateDelegatedResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateDelegatedResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceCreateDelegatedResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateDelegatedResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateDelegatedResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateDelegatedResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateDelegatedResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateDelegatedResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceCreateDelegatedResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceCreateDelegatedResponseToJSON(c1ApiAppV1ConnectorServiceCreateDelegatedResponse: C1ApiAppV1ConnectorServiceCreateDelegatedResponse): string;
export declare function c1ApiAppV1ConnectorServiceCreateDelegatedResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceCreateDelegatedResponse, SDKValidationError>;
