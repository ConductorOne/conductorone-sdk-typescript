import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Connector, Connector$Outbound } from "./connector.js";
/**
 * The ConnectorView object provides a connector response object, as well as JSONPATHs to related objects provided by expanders.
 */
export type ConnectorView = {
    /**
     * JSONPATH expression indicating the location of the App object in the expanded array.
     */
    appPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the ConnectorCapabilities object in the expanded array.
     */
    capabilitiesPath?: string | null | undefined;
    connector?: Connector | null | undefined;
    /**
     * JSONPATH expression indicating the location of the User object in the expanded array. This is the user that is a direct target of the ticket without a specific relationship to a potentially non-existent app user.
     */
    usersPath?: string | null | undefined;
};
/** @internal */
export declare const ConnectorView$inboundSchema: z.ZodType<ConnectorView, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorView$Outbound = {
    appPath?: string | null | undefined;
    capabilitiesPath?: string | null | undefined;
    connector?: Connector$Outbound | null | undefined;
    usersPath?: string | null | undefined;
};
/** @internal */
export declare const ConnectorView$outboundSchema: z.ZodType<ConnectorView$Outbound, z.ZodTypeDef, ConnectorView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorView$ {
    /** @deprecated use `ConnectorView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorView, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorView$Outbound, z.ZodTypeDef, ConnectorView>;
    /** @deprecated use `ConnectorView$Outbound` instead. */
    type Outbound = ConnectorView$Outbound;
}
export declare function connectorViewToJSON(connectorView: ConnectorView): string;
export declare function connectorViewFromJSON(jsonString: string): SafeParseResult<ConnectorView, SDKValidationError>;
