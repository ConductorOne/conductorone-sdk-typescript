import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorInput, ConnectorInput$Outbound } from "./connector.js";
import { ConnectorExpandMask, ConnectorExpandMask$Outbound } from "./connectorexpandmask.js";
/**
 * The ConnectorServiceUpdateDelegatedRequest message contains the fields required to update a connector.
 */
export type ConnectorServiceUpdateDelegatedRequest = {
    connector?: ConnectorInput | null | undefined;
    expandMask?: ConnectorExpandMask | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceUpdateDelegatedRequest$inboundSchema: z.ZodType<ConnectorServiceUpdateDelegatedRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceUpdateDelegatedRequest$Outbound = {
    connector?: ConnectorInput$Outbound | null | undefined;
    expandMask?: ConnectorExpandMask$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceUpdateDelegatedRequest$outboundSchema: z.ZodType<ConnectorServiceUpdateDelegatedRequest$Outbound, z.ZodTypeDef, ConnectorServiceUpdateDelegatedRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceUpdateDelegatedRequest$ {
    /** @deprecated use `ConnectorServiceUpdateDelegatedRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceUpdateDelegatedRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceUpdateDelegatedRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceUpdateDelegatedRequest$Outbound, z.ZodTypeDef, ConnectorServiceUpdateDelegatedRequest>;
    /** @deprecated use `ConnectorServiceUpdateDelegatedRequest$Outbound` instead. */
    type Outbound = ConnectorServiceUpdateDelegatedRequest$Outbound;
}
export declare function connectorServiceUpdateDelegatedRequestToJSON(connectorServiceUpdateDelegatedRequest: ConnectorServiceUpdateDelegatedRequest): string;
export declare function connectorServiceUpdateDelegatedRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceUpdateDelegatedRequest, SDKValidationError>;
