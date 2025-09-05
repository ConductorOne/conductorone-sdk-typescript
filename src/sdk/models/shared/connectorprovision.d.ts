import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AccountProvision, AccountProvision$Outbound } from "./accountprovision.js";
import { DefaultBehavior, DefaultBehavior$Outbound } from "./defaultbehavior.js";
import { DeleteAccount, DeleteAccount$Outbound } from "./deleteaccount.js";
/**
 * Indicates that a connector should perform the provisioning. This object has no fields.
 *
 * @remarks
 *
 * This message contains a oneof named provision_type. Only a single field of the following list may be set at a time:
 *   - defaultBehavior
 *   - account
 *   - deleteAccount
 */
export type ConnectorProvision = {
    account?: AccountProvision | null | undefined;
    defaultBehavior?: DefaultBehavior | null | undefined;
    deleteAccount?: DeleteAccount | null | undefined;
};
/** @internal */
export declare const ConnectorProvision$inboundSchema: z.ZodType<ConnectorProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorProvision$Outbound = {
    account?: AccountProvision$Outbound | null | undefined;
    defaultBehavior?: DefaultBehavior$Outbound | null | undefined;
    deleteAccount?: DeleteAccount$Outbound | null | undefined;
};
/** @internal */
export declare const ConnectorProvision$outboundSchema: z.ZodType<ConnectorProvision$Outbound, z.ZodTypeDef, ConnectorProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorProvision$ {
    /** @deprecated use `ConnectorProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorProvision$Outbound, z.ZodTypeDef, ConnectorProvision>;
    /** @deprecated use `ConnectorProvision$Outbound` instead. */
    type Outbound = ConnectorProvision$Outbound;
}
export declare function connectorProvisionToJSON(connectorProvision: ConnectorProvision): string;
export declare function connectorProvisionFromJSON(jsonString: string): SafeParseResult<ConnectorProvision, SDKValidationError>;
