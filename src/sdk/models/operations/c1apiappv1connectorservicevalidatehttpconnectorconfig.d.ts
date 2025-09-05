import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse = {
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
    editorValidateResponse?: shared.EditorValidateResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    EditorValidateResponse?: shared.EditorValidateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$ {
    /** @deprecated use `C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$Outbound, z.ZodTypeDef, C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse>;
    /** @deprecated use `C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse$Outbound;
}
export declare function c1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponseToJSON(c1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse: C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse): string;
export declare function c1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1ConnectorServiceValidateHTTPConnectorConfigResponse, SDKValidationError>;
