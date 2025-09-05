import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ConnectorRef message.
 */
export type ConnectorRef = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const ConnectorRef$inboundSchema: z.ZodType<ConnectorRef, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorRef$Outbound = {
    appId?: string | null | undefined;
    id?: string | null | undefined;
};
/** @internal */
export declare const ConnectorRef$outboundSchema: z.ZodType<ConnectorRef$Outbound, z.ZodTypeDef, ConnectorRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorRef$ {
    /** @deprecated use `ConnectorRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorRef$Outbound, z.ZodTypeDef, ConnectorRef>;
    /** @deprecated use `ConnectorRef$Outbound` instead. */
    type Outbound = ConnectorRef$Outbound;
}
export declare function connectorRefToJSON(connectorRef: ConnectorRef): string;
export declare function connectorRefFromJSON(jsonString: string): SafeParseResult<ConnectorRef, SDKValidationError>;
