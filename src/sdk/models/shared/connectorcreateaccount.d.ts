import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorRef, ConnectorRef$Outbound } from "./connectorref.js";
import { UserProperties, UserProperties$Outbound } from "./userproperties.js";
/**
 * The ConnectorCreateAccount message.
 *
 * @remarks
 *
 * This message contains a oneof named create_account_arguments. Only a single field of the following list may be set at a time:
 *   - userIdCel
 *   - userProperties
 */
export type ConnectorCreateAccount = {
    connectorRef?: ConnectorRef | null | undefined;
    /**
     * The userIdCel field.
     *
     * @remarks
     * This field is part of the `create_account_arguments` oneof.
     * See the documentation for `c1.api.automations.v1.ConnectorCreateAccount` for more details.
     */
    userIdCel?: string | null | undefined;
    userProperties?: UserProperties | null | undefined;
};
/** @internal */
export declare const ConnectorCreateAccount$inboundSchema: z.ZodType<ConnectorCreateAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorCreateAccount$Outbound = {
    connectorRef?: ConnectorRef$Outbound | null | undefined;
    userIdCel?: string | null | undefined;
    userProperties?: UserProperties$Outbound | null | undefined;
};
/** @internal */
export declare const ConnectorCreateAccount$outboundSchema: z.ZodType<ConnectorCreateAccount$Outbound, z.ZodTypeDef, ConnectorCreateAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorCreateAccount$ {
    /** @deprecated use `ConnectorCreateAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorCreateAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorCreateAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorCreateAccount$Outbound, z.ZodTypeDef, ConnectorCreateAccount>;
    /** @deprecated use `ConnectorCreateAccount$Outbound` instead. */
    type Outbound = ConnectorCreateAccount$Outbound;
}
export declare function connectorCreateAccountToJSON(connectorCreateAccount: ConnectorCreateAccount): string;
export declare function connectorCreateAccountFromJSON(jsonString: string): SafeParseResult<ConnectorCreateAccount, SDKValidationError>;
