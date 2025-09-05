import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorView, ConnectorView$Outbound } from "./connectorview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The ConnectorServiceGetResponse message contains the connectorView, and an expand mask.
 */
export type ConnectorServiceGetResponse = {
    connectorView?: ConnectorView | null | undefined;
    /**
     * The array of expanded items indicated by the request.
     */
    expanded?: Array<ConnectorServiceGetResponseExpanded> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceGetResponseExpanded$inboundSchema: z.ZodType<ConnectorServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ConnectorServiceGetResponseExpanded$outboundSchema: z.ZodType<ConnectorServiceGetResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceGetResponseExpanded$ {
    /** @deprecated use `ConnectorServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceGetResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceGetResponseExpanded>;
    /** @deprecated use `ConnectorServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = ConnectorServiceGetResponseExpanded$Outbound;
}
export declare function connectorServiceGetResponseExpandedToJSON(connectorServiceGetResponseExpanded: ConnectorServiceGetResponseExpanded): string;
export declare function connectorServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<ConnectorServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const ConnectorServiceGetResponse$inboundSchema: z.ZodType<ConnectorServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceGetResponse$Outbound = {
    connectorView?: ConnectorView$Outbound | null | undefined;
    expanded?: Array<ConnectorServiceGetResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceGetResponse$outboundSchema: z.ZodType<ConnectorServiceGetResponse$Outbound, z.ZodTypeDef, ConnectorServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceGetResponse$ {
    /** @deprecated use `ConnectorServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceGetResponse$Outbound, z.ZodTypeDef, ConnectorServiceGetResponse>;
    /** @deprecated use `ConnectorServiceGetResponse$Outbound` instead. */
    type Outbound = ConnectorServiceGetResponse$Outbound;
}
export declare function connectorServiceGetResponseToJSON(connectorServiceGetResponse: ConnectorServiceGetResponse): string;
export declare function connectorServiceGetResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceGetResponse, SDKValidationError>;
