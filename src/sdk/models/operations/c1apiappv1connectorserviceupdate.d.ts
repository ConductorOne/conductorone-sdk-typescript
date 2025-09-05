import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceUpdateRequest = {
    appId: string | null;
    id: string | null;
    connectorServiceUpdateRequest?: shared.ConnectorServiceUpdateRequest | undefined;
};
export type C1ApiAppV1ConnectorServiceUpdateResponse = {
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
export declare const C1ApiAppV1ConnectorServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceUpdateRequest$Outbound = {
    app_id: string | null;
    id: string | null;
    ConnectorServiceUpdateRequest?: shared.ConnectorServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceUpdateRequest$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateRequest>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceUpdateRequest$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceUpdateRequestToJSON(c1ApiAppV1ConnectorServiceUpdateRequest: C1ApiAppV1ConnectorServiceUpdateRequest): string;
export declare function c1ApiAppV1ConnectorServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceUpdateResponse?: shared.ConnectorServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceUpdateResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceUpdateResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceUpdateResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceUpdateResponseToJSON(c1ApiAppV1ConnectorServiceUpdateResponse: C1ApiAppV1ConnectorServiceUpdateResponse): string;
export declare function c1ApiAppV1ConnectorServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceUpdateResponse, SDKValidationError>;
