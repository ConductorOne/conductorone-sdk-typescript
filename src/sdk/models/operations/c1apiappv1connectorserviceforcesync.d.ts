import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceForceSyncRequest = {
    appId: string | null;
    connectorId: string | null;
    forceSyncRequest?: shared.ForceSyncRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceForceSyncResponse = {
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
    forceSyncResponse?: shared.ForceSyncResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceForceSyncRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceForceSyncRequest$Outbound = {
    app_id: string | null;
    connector_id: string | null;
    ForceSyncRequest?: shared.ForceSyncRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceForceSyncRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceForceSyncRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceForceSyncRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceForceSyncRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceForceSyncRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceForceSyncRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceForceSyncRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceForceSyncRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceForceSyncRequestToJSON(c1ApiAppV1ConnectorServiceForceSyncRequest: C1ApiAppV1ConnectorServiceForceSyncRequest): string;
export declare function c1ApiAppV1ConnectorServiceForceSyncRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceForceSyncRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceForceSyncResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceForceSyncResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ForceSyncResponse?: shared.ForceSyncResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceForceSyncResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceForceSyncResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceForceSyncResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceForceSyncResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceForceSyncResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceForceSyncResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceForceSyncResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceForceSyncResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceForceSyncResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceForceSyncResponseToJSON(c1ApiAppV1ConnectorServiceForceSyncResponse: C1ApiAppV1ConnectorServiceForceSyncResponse): string;
export declare function c1ApiAppV1ConnectorServiceForceSyncResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceForceSyncResponse, SDKValidationError>;
