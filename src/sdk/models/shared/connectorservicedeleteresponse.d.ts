import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response body. Status code indicates success.
 */
export type ConnectorServiceDeleteResponse = {};
/** @internal */
export declare const ConnectorServiceDeleteResponse$inboundSchema: z.ZodType<ConnectorServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceDeleteResponse$Outbound = {};
/** @internal */
export declare const ConnectorServiceDeleteResponse$outboundSchema: z.ZodType<ConnectorServiceDeleteResponse$Outbound, z.ZodTypeDef, ConnectorServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceDeleteResponse$ {
    /** @deprecated use `ConnectorServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceDeleteResponse$Outbound, z.ZodTypeDef, ConnectorServiceDeleteResponse>;
    /** @deprecated use `ConnectorServiceDeleteResponse$Outbound` instead. */
    type Outbound = ConnectorServiceDeleteResponse$Outbound;
}
export declare function connectorServiceDeleteResponseToJSON(connectorServiceDeleteResponse: ConnectorServiceDeleteResponse): string;
export declare function connectorServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceDeleteResponse, SDKValidationError>;
