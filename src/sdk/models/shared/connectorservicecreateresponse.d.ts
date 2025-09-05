import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorView, ConnectorView$Outbound } from "./connectorview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceCreateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The ConnectorServiceCreateResponse is the response returned from creating a connector.
 */
export type ConnectorServiceCreateResponse = {
    connectorView?: ConnectorView | null | undefined;
    /**
     * The array of expanded items indicated by the request.
     */
    expanded?: Array<ConnectorServiceCreateResponseExpanded> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceCreateResponseExpanded$inboundSchema: z.ZodType<ConnectorServiceCreateResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceCreateResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ConnectorServiceCreateResponseExpanded$outboundSchema: z.ZodType<ConnectorServiceCreateResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceCreateResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceCreateResponseExpanded$ {
    /** @deprecated use `ConnectorServiceCreateResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceCreateResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceCreateResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceCreateResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceCreateResponseExpanded>;
    /** @deprecated use `ConnectorServiceCreateResponseExpanded$Outbound` instead. */
    type Outbound = ConnectorServiceCreateResponseExpanded$Outbound;
}
export declare function connectorServiceCreateResponseExpandedToJSON(connectorServiceCreateResponseExpanded: ConnectorServiceCreateResponseExpanded): string;
export declare function connectorServiceCreateResponseExpandedFromJSON(jsonString: string): SafeParseResult<ConnectorServiceCreateResponseExpanded, SDKValidationError>;
/** @internal */
export declare const ConnectorServiceCreateResponse$inboundSchema: z.ZodType<ConnectorServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceCreateResponse$Outbound = {
    connectorView?: ConnectorView$Outbound | null | undefined;
    expanded?: Array<ConnectorServiceCreateResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceCreateResponse$outboundSchema: z.ZodType<ConnectorServiceCreateResponse$Outbound, z.ZodTypeDef, ConnectorServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceCreateResponse$ {
    /** @deprecated use `ConnectorServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceCreateResponse$Outbound, z.ZodTypeDef, ConnectorServiceCreateResponse>;
    /** @deprecated use `ConnectorServiceCreateResponse$Outbound` instead. */
    type Outbound = ConnectorServiceCreateResponse$Outbound;
}
export declare function connectorServiceCreateResponseToJSON(connectorServiceCreateResponse: ConnectorServiceCreateResponse): string;
export declare function connectorServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceCreateResponse, SDKValidationError>;
