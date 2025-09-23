import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceCreateRequest = {
    appId: string | null;
    connectorServiceCreateRequest?: shared.ConnectorServiceCreateRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceCreateResponse = {
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
export declare const C1ApiAppV1ConnectorServiceCreateRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceCreateRequest$Outbound = {
    app_id: string | null;
    ConnectorServiceCreateRequest?: shared.ConnectorServiceCreateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceCreateRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceCreateRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceCreateRequestToJSON(c1ApiAppV1ConnectorServiceCreateRequest: C1ApiAppV1ConnectorServiceCreateRequest): string;
export declare function c1ApiAppV1ConnectorServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceCreateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceCreateResponse?: shared.ConnectorServiceCreateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceCreateResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceCreateResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceCreateResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceCreateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceCreateResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceCreateResponseToJSON(c1ApiAppV1ConnectorServiceCreateResponse: C1ApiAppV1ConnectorServiceCreateResponse): string;
export declare function c1ApiAppV1ConnectorServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceCreateResponse, SDKValidationError>;
