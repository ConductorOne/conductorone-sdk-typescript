import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceUpdateDelegatedRequest = {
    connectorAppId: string | null;
    connectorId: string | null;
    connectorServiceUpdateDelegatedRequest?: shared.ConnectorServiceUpdateDelegatedRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceUpdateDelegatedResponse = {
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
     * ConnectorServiceUpdateResponse is the response returned by the update method.
     */
    connectorServiceUpdateResponse?: shared.ConnectorServiceUpdateResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$Outbound = {
    connector_app_id: string | null;
    connector_id: string | null;
    ConnectorServiceUpdateDelegatedRequest?: shared.ConnectorServiceUpdateDelegatedRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateDelegatedRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateDelegatedRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceUpdateDelegatedRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceUpdateDelegatedRequestToJSON(c1ApiAppV1ConnectorServiceUpdateDelegatedRequest: C1ApiAppV1ConnectorServiceUpdateDelegatedRequest): string;
export declare function c1ApiAppV1ConnectorServiceUpdateDelegatedRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceUpdateDelegatedRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceUpdateResponse?: shared.ConnectorServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateDelegatedResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateDelegatedResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceUpdateDelegatedResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceUpdateDelegatedResponseToJSON(c1ApiAppV1ConnectorServiceUpdateDelegatedResponse: C1ApiAppV1ConnectorServiceUpdateDelegatedResponse): string;
export declare function c1ApiAppV1ConnectorServiceUpdateDelegatedResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceUpdateDelegatedResponse, SDKValidationError>;
