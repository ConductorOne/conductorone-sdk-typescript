import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceDeleteRequest = {
    appId: string | null;
    id: string | null;
    connectorServiceDeleteRequest?: shared.ConnectorServiceDeleteRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceDeleteResponse = {
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
    connectorServiceDeleteResponse?: shared.ConnectorServiceDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceDeleteRequest$Outbound = {
    app_id: string | null;
    id: string | null;
    ConnectorServiceDeleteRequest?: shared.ConnectorServiceDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceDeleteRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceDeleteRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceDeleteRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceDeleteRequestToJSON(c1ApiAppV1ConnectorServiceDeleteRequest: C1ApiAppV1ConnectorServiceDeleteRequest): string;
export declare function c1ApiAppV1ConnectorServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceDeleteResponse?: shared.ConnectorServiceDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceDeleteResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceDeleteResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceDeleteResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceDeleteResponseToJSON(c1ApiAppV1ConnectorServiceDeleteResponse: C1ApiAppV1ConnectorServiceDeleteResponse): string;
export declare function c1ApiAppV1ConnectorServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceDeleteResponse, SDKValidationError>;
