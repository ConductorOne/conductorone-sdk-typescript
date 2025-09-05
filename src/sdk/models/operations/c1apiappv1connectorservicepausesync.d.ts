import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServicePauseSyncRequest = {
    appId: string | null;
    connectorId: string | null;
    pauseSyncRequest?: shared.PauseSyncRequest | undefined;
};
export type C1ApiAppV1ConnectorServicePauseSyncResponse = {
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
     * Successful response
     */
    pauseSyncResponse?: shared.PauseSyncResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServicePauseSyncRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServicePauseSyncRequest$Outbound = {
    app_id: string | null;
    connector_id: string | null;
    PauseSyncRequest?: shared.PauseSyncRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServicePauseSyncRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServicePauseSyncRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServicePauseSyncRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServicePauseSyncRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServicePauseSyncRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServicePauseSyncRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServicePauseSyncRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServicePauseSyncRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServicePauseSyncRequestToJSON(c1ApiAppV1ConnectorServicePauseSyncRequest: C1ApiAppV1ConnectorServicePauseSyncRequest): string;
export declare function c1ApiAppV1ConnectorServicePauseSyncRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServicePauseSyncRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServicePauseSyncResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServicePauseSyncResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PauseSyncResponse?: shared.PauseSyncResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServicePauseSyncResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServicePauseSyncResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServicePauseSyncResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServicePauseSyncResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServicePauseSyncResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServicePauseSyncResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServicePauseSyncResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServicePauseSyncResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServicePauseSyncResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServicePauseSyncResponseToJSON(c1ApiAppV1ConnectorServicePauseSyncResponse: C1ApiAppV1ConnectorServicePauseSyncResponse): string;
export declare function c1ApiAppV1ConnectorServicePauseSyncResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServicePauseSyncResponse, SDKValidationError>;
