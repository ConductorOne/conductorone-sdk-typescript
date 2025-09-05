import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorExpandMask, ConnectorExpandMask$Outbound } from "./connectorexpandmask.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceCreateRequestConfig = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The ConnectorServiceCreateRequest message.
 */
export type ConnectorServiceCreateRequest = {
    /**
     * The catalogId field.
     */
    catalogId?: string | null | undefined;
    config?: ConnectorServiceCreateRequestConfig | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    expandMask?: ConnectorExpandMask | null | undefined;
    /**
     * The userIds field.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceCreateRequestConfig$inboundSchema: z.ZodType<ConnectorServiceCreateRequestConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceCreateRequestConfig$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ConnectorServiceCreateRequestConfig$outboundSchema: z.ZodType<ConnectorServiceCreateRequestConfig$Outbound, z.ZodTypeDef, ConnectorServiceCreateRequestConfig>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceCreateRequestConfig$ {
    /** @deprecated use `ConnectorServiceCreateRequestConfig$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceCreateRequestConfig, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceCreateRequestConfig$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceCreateRequestConfig$Outbound, z.ZodTypeDef, ConnectorServiceCreateRequestConfig>;
    /** @deprecated use `ConnectorServiceCreateRequestConfig$Outbound` instead. */
    type Outbound = ConnectorServiceCreateRequestConfig$Outbound;
}
export declare function connectorServiceCreateRequestConfigToJSON(connectorServiceCreateRequestConfig: ConnectorServiceCreateRequestConfig): string;
export declare function connectorServiceCreateRequestConfigFromJSON(jsonString: string): SafeParseResult<ConnectorServiceCreateRequestConfig, SDKValidationError>;
/** @internal */
export declare const ConnectorServiceCreateRequest$inboundSchema: z.ZodType<ConnectorServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceCreateRequest$Outbound = {
    catalogId?: string | null | undefined;
    config?: ConnectorServiceCreateRequestConfig$Outbound | null | undefined;
    description?: string | null | undefined;
    expandMask?: ConnectorExpandMask$Outbound | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceCreateRequest$outboundSchema: z.ZodType<ConnectorServiceCreateRequest$Outbound, z.ZodTypeDef, ConnectorServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceCreateRequest$ {
    /** @deprecated use `ConnectorServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceCreateRequest$Outbound, z.ZodTypeDef, ConnectorServiceCreateRequest>;
    /** @deprecated use `ConnectorServiceCreateRequest$Outbound` instead. */
    type Outbound = ConnectorServiceCreateRequest$Outbound;
}
export declare function connectorServiceCreateRequestToJSON(connectorServiceCreateRequest: ConnectorServiceCreateRequest): string;
export declare function connectorServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceCreateRequest, SDKValidationError>;
