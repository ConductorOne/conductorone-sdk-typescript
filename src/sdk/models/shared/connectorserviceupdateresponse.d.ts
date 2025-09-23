import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorView, ConnectorView$Outbound } from "./connectorview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceUpdateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * ConnectorServiceUpdateResponse is the response returned by the update method.
 */
export type ConnectorServiceUpdateResponse = {
    connectorView?: ConnectorView | null | undefined;
    /**
     * The array of expanded items indicated by the request.
     */
    expanded?: Array<ConnectorServiceUpdateResponseExpanded> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceUpdateResponseExpanded$inboundSchema: z.ZodType<ConnectorServiceUpdateResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceUpdateResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ConnectorServiceUpdateResponseExpanded$outboundSchema: z.ZodType<ConnectorServiceUpdateResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceUpdateResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceUpdateResponseExpanded$ {
    /** @deprecated use `ConnectorServiceUpdateResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceUpdateResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceUpdateResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceUpdateResponseExpanded$Outbound, z.ZodTypeDef, ConnectorServiceUpdateResponseExpanded>;
    /** @deprecated use `ConnectorServiceUpdateResponseExpanded$Outbound` instead. */
    type Outbound = ConnectorServiceUpdateResponseExpanded$Outbound;
}
export declare function connectorServiceUpdateResponseExpandedToJSON(connectorServiceUpdateResponseExpanded: ConnectorServiceUpdateResponseExpanded): string;
export declare function connectorServiceUpdateResponseExpandedFromJSON(jsonString: string): SafeParseResult<ConnectorServiceUpdateResponseExpanded, SDKValidationError>;
/** @internal */
export declare const ConnectorServiceUpdateResponse$inboundSchema: z.ZodType<ConnectorServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceUpdateResponse$Outbound = {
    connectorView?: ConnectorView$Outbound | null | undefined;
    expanded?: Array<ConnectorServiceUpdateResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceUpdateResponse$outboundSchema: z.ZodType<ConnectorServiceUpdateResponse$Outbound, z.ZodTypeDef, ConnectorServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceUpdateResponse$ {
    /** @deprecated use `ConnectorServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceUpdateResponse$Outbound, z.ZodTypeDef, ConnectorServiceUpdateResponse>;
    /** @deprecated use `ConnectorServiceUpdateResponse$Outbound` instead. */
    type Outbound = ConnectorServiceUpdateResponse$Outbound;
}
export declare function connectorServiceUpdateResponseToJSON(connectorServiceUpdateResponse: ConnectorServiceUpdateResponse): string;
export declare function connectorServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceUpdateResponse, SDKValidationError>;
