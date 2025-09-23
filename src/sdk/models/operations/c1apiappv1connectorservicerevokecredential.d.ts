import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceRevokeCredentialRequest = {
    appId: string | null;
    connectorId: string | null;
    id: string | null;
    connectorServiceRevokeCredentialRequest?: shared.ConnectorServiceRevokeCredentialRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceRevokeCredentialResponse = {
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
     * Empty response body. Status code indicates success.
     */
    connectorServiceRevokeCredentialResponse?: shared.ConnectorServiceRevokeCredentialResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceRevokeCredentialRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceRevokeCredentialRequest$Outbound = {
    app_id: string | null;
    connector_id: string | null;
    id: string | null;
    ConnectorServiceRevokeCredentialRequest?: shared.ConnectorServiceRevokeCredentialRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceRevokeCredentialRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceRevokeCredentialRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceRevokeCredentialRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceRevokeCredentialRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceRevokeCredentialRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceRevokeCredentialRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceRevokeCredentialRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceRevokeCredentialRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceRevokeCredentialRequestToJSON(c1ApiAppV1ConnectorServiceRevokeCredentialRequest: C1ApiAppV1ConnectorServiceRevokeCredentialRequest): string;
export declare function c1ApiAppV1ConnectorServiceRevokeCredentialRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceRevokeCredentialRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceRevokeCredentialResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceRevokeCredentialResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceRevokeCredentialResponse?: shared.ConnectorServiceRevokeCredentialResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceRevokeCredentialResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceRevokeCredentialResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceRevokeCredentialResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceRevokeCredentialResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceRevokeCredentialResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRevokeCredentialResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceRevokeCredentialResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceRevokeCredentialResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceRevokeCredentialResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceRevokeCredentialResponseToJSON(c1ApiAppV1ConnectorServiceRevokeCredentialResponse: C1ApiAppV1ConnectorServiceRevokeCredentialResponse): string;
export declare function c1ApiAppV1ConnectorServiceRevokeCredentialResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceRevokeCredentialResponse, SDKValidationError>;
