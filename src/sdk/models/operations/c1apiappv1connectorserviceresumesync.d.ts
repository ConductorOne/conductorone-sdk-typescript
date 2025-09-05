import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceResumeSyncRequest = {
    appId: string | null;
    connectorId: string | null;
    resumeSyncRequest?: shared.ResumeSyncRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceResumeSyncResponse = {
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
    resumeSyncResponse?: shared.ResumeSyncResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceResumeSyncRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceResumeSyncRequest$Outbound = {
    app_id: string | null;
    connector_id: string | null;
    ResumeSyncRequest?: shared.ResumeSyncRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceResumeSyncRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceResumeSyncRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceResumeSyncRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceResumeSyncRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceResumeSyncRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceResumeSyncRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceResumeSyncRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceResumeSyncRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceResumeSyncRequestToJSON(c1ApiAppV1ConnectorServiceResumeSyncRequest: C1ApiAppV1ConnectorServiceResumeSyncRequest): string;
export declare function c1ApiAppV1ConnectorServiceResumeSyncRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceResumeSyncRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceResumeSyncResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceResumeSyncResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ResumeSyncResponse?: shared.ResumeSyncResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceResumeSyncResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceResumeSyncResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceResumeSyncResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceResumeSyncResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceResumeSyncResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceResumeSyncResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceResumeSyncResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceResumeSyncResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceResumeSyncResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceResumeSyncResponseToJSON(c1ApiAppV1ConnectorServiceResumeSyncResponse: C1ApiAppV1ConnectorServiceResumeSyncResponse): string;
export declare function c1ApiAppV1ConnectorServiceResumeSyncResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceResumeSyncResponse, SDKValidationError>;
