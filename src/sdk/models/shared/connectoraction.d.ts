import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorRef, ConnectorRef$Outbound } from "./connectorref.js";
/**
 * The ConnectorAction message.
 *
 * @remarks
 *
 * This message contains a oneof named connector_identifier. Only a single field of the following list may be set at a time:
 *   - connectorRef
 */
export type ConnectorAction = {
    /**
     * The actionName field.
     */
    actionName?: string | null | undefined;
    argsTemplate?: {
        [k: string]: any;
    } | null | undefined;
    connectorRef?: ConnectorRef | null | undefined;
};
/** @internal */
export declare const ConnectorAction$inboundSchema: z.ZodType<ConnectorAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorAction$Outbound = {
    actionName?: string | null | undefined;
    argsTemplate?: {
        [k: string]: any;
    } | null | undefined;
    connectorRef?: ConnectorRef$Outbound | null | undefined;
};
/** @internal */
export declare const ConnectorAction$outboundSchema: z.ZodType<ConnectorAction$Outbound, z.ZodTypeDef, ConnectorAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorAction$ {
    /** @deprecated use `ConnectorAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorAction$Outbound, z.ZodTypeDef, ConnectorAction>;
    /** @deprecated use `ConnectorAction$Outbound` instead. */
    type Outbound = ConnectorAction$Outbound;
}
export declare function connectorActionToJSON(connectorAction: ConnectorAction): string;
export declare function connectorActionFromJSON(jsonString: string): SafeParseResult<ConnectorAction, SDKValidationError>;
