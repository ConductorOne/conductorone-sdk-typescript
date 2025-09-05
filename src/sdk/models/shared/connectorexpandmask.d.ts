import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ConnectorExpandMask is used to expand related objects on a connector.
 */
export type ConnectorExpandMask = {
    /**
     * Paths that you want expanded in the response. Possible values are "app_id" and "*".
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorExpandMask$inboundSchema: z.ZodType<ConnectorExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorExpandMask$outboundSchema: z.ZodType<ConnectorExpandMask$Outbound, z.ZodTypeDef, ConnectorExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorExpandMask$ {
    /** @deprecated use `ConnectorExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorExpandMask$Outbound, z.ZodTypeDef, ConnectorExpandMask>;
    /** @deprecated use `ConnectorExpandMask$Outbound` instead. */
    type Outbound = ConnectorExpandMask$Outbound;
}
export declare function connectorExpandMaskToJSON(connectorExpandMask: ConnectorExpandMask): string;
export declare function connectorExpandMaskFromJSON(jsonString: string): SafeParseResult<ConnectorExpandMask, SDKValidationError>;
