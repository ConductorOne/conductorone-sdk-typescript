import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceRotateCredentialResponse = {
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
     * ConnectorServiceRotateCredentialResponse is the response returned by the rotate method.
     */
    connectorServiceRotateCredentialResponse?: shared.ConnectorServiceRotateCredentialResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceRotateCredentialResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRotateCredentialResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceRotateCredentialResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConnectorServiceRotateCredentialResponse?: shared.ConnectorServiceRotateCredentialResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceRotateCredentialResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRotateCredentialResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceRotateCredentialResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceRotateCredentialResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceRotateCredentialResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRotateCredentialResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceRotateCredentialResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceRotateCredentialResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceRotateCredentialResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceRotateCredentialResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceRotateCredentialResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceRotateCredentialResponseToJSON(c1ApiAppV1ConnectorServiceRotateCredentialResponse: C1ApiAppV1ConnectorServiceRotateCredentialResponse): string;
export declare function c1ApiAppV1ConnectorServiceRotateCredentialResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceRotateCredentialResponse, SDKValidationError>;
