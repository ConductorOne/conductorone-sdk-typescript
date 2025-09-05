import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorInput, ConnectorInput$Outbound } from "./connector.js";
import { ConnectorExpandMask, ConnectorExpandMask$Outbound } from "./connectorexpandmask.js";
/**
 * The ConnectorServiceUpdateRequest message contains the fields required to update a connector.
 */
export type ConnectorServiceUpdateRequest = {
    connector?: ConnectorInput | null | undefined;
    expandMask?: ConnectorExpandMask | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceUpdateRequest$inboundSchema: z.ZodType<ConnectorServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceUpdateRequest$Outbound = {
    connector?: ConnectorInput$Outbound | null | undefined;
    expandMask?: ConnectorExpandMask$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceUpdateRequest$outboundSchema: z.ZodType<ConnectorServiceUpdateRequest$Outbound, z.ZodTypeDef, ConnectorServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceUpdateRequest$ {
    /** @deprecated use `ConnectorServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceUpdateRequest$Outbound, z.ZodTypeDef, ConnectorServiceUpdateRequest>;
    /** @deprecated use `ConnectorServiceUpdateRequest$Outbound` instead. */
    type Outbound = ConnectorServiceUpdateRequest$Outbound;
}
export declare function connectorServiceUpdateRequestToJSON(connectorServiceUpdateRequest: ConnectorServiceUpdateRequest): string;
export declare function connectorServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceUpdateRequest, SDKValidationError>;
